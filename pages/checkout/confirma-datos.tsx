/* eslint-disable @next/next/no-sync-scripts */
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { ShopLayout, Summary,  CheckoutForm} from "../../components";
import { getUrlEncoded } from "../../utils";
import { WHATSAPP_ROUTE } from "../../constants";
import { useCart } from "../../hooks";
import { useRouter } from "next/router";

const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 31.25rem) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const UserInformation = styled.section`
  width: 65%;
  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;

const ConfirmaDatos: NextPage = () => {
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
