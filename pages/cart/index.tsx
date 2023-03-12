import { NextPage } from "next";
import styled from "styled-components";
import { CartList, ShopLayout } from "../../components";

const Container = styled.section`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`;

const Cart: NextPage = () => {
  return (
    <ShopLayout
      title="Carrito de compras"
      descriptionPage="Gestiona tus productos para la compra"
    >
      <Container>
        <CartList mode="complete" />
      </Container>
    </ShopLayout>
  );
};
export default Cart;
