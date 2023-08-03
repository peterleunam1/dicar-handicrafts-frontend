/* eslint-disable @next/next/no-sync-scripts */
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { ShopLayout, Summary } from "../../components";
import CheckoutForm from "../../components/organisms/checkout-form/checkout-form.component";
import { getUrlEncoded } from "../../helpers/get-url-encode-from-object";
import { WHATSAPP_ROUTE } from "../../constants";
import { useCart } from "../../hooks/useCart";
import { useRouter } from "next/router";

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
  const navigateTo = useRouter().push;
  const [data, setData] = useState<Record<string, string>>({});
  const { cart } = useCart();
  const { personalData, products } = getUrlEncoded({
    data,
    productsInCart: [],
  });


  const handleClick = () => {
    window.location.href = `${WHATSAPP_ROUTE}*%0A${personalData}*%0A%20${products}%0A`;
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
            data={data}
            setData={setData}
            handleClick={handleClick}
          />
        </UserInformation>
        <Summary products={cart} type="checkout" />
      </Main>
    </ShopLayout>
  );
};
export default ConfirmaDatos;
