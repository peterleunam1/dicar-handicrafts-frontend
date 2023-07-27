/* eslint-disable @next/next/no-sync-scripts */
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { ShopLayout, Summary } from "../../components";
import CheckoutForm from "../../components/organisms/checkout-form/checkout-form.component";
import useDepartments from "../../hooks/useDepartments";
import useMunicipalities from "../../hooks/useMunicipalities";
import { AddressCheckoutModel, ReturnedMunicipality } from "../../interfaces";
import { getUrlEncoded } from "../../helpers/get-url-encode-from-object";
// import useCart from "../../hooks/useCart";
import { WHATSAPP_ROUTE } from "../../constants";

const Main = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const UserInformation = styled.section`
  width: 65%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ConfirmaDatos: NextPage = () => {
  const [address, setAddress] = useState<AddressCheckoutModel>({});
  const [data, setData] = useState<Record<string, string>>({});
  // const {inCart} =  useCart();
  const { departments } = useDepartments();
  const { municipalities, error } = useMunicipalities({
    department: address.Departamento,
  });
  const { personalData, products } = getUrlEncoded({
    data,
    productsInCart: [],
  });

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (
    //   Object.keys(data).length === 6 &&
    //   Object.values(data).every((value) => value !== "")
    // ) {
    //   redirect = true;
    // } else {
    //   alert("llene todos los campos");
    //   redirect = false;
    // }
  };

  const handleClick = () => {
    window.location.href = `${WHATSAPP_ROUTE}*%0A${personalData}%0A*🏙️ Departamento*: ${address.Departamento}%0A*📍 Ciudad*: ${address.Municipio}%0A%20${products}%0A`;
  };

  return (
    <ShopLayout
      title="Confirma tus datos"
      descriptionPage="Verifica tus datos para comprar"
    >
      <h2>Verifica tus datos</h2>
      <Main>
        <UserInformation>
          <CheckoutForm
            handleChange={handleChange}
            states={departments || []}
            handleSelect={handleSelect}
            cities={municipalities as ReturnedMunicipality}
            error={error}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
          />
        </UserInformation>
        <Summary />
      </Main>
    </ShopLayout>
  );
};
export default ConfirmaDatos;
