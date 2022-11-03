import { FC } from "react";
import styled from "styled-components";
import { products_accesorios } from "../../../helpers";
import { CartItem } from "../../../components";

const productsInCart = [
  products_accesorios[10],
  products_accesorios[11],
  products_accesorios[12],
  products_accesorios[13],
  products_accesorios[1],
  products_accesorios[2],
];

const Container = styled.div`
  width: 60%;
  height: 100%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.18), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CartList: FC = () => {
  return (
    <Container>
      {productsInCart.map((element) => {
        return <CartItem {...element} key={element.id} />;
      })}
    </Container>
  );
};

export default CartList;
