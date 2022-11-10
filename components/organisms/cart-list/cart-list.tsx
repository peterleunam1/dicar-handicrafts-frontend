import { FC, useState } from "react";
import styled from "styled-components";
import { products_accesorios } from "../../../helpers";
import { CartItem, Button, Summary, Item } from "../../../components";
import { useRouter } from "next/router";
import { CartListProps } from "../../../interfaces";

const productsInCart = [
  products_accesorios[10],
  products_accesorios[11],
  products_accesorios[12],
  products_accesorios[13],
  products_accesorios[1],
  products_accesorios[2],
];
const HeaderList = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid #e8e8e8;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  strong {
    text-transform: uppercase;
    font-size: 15px;
  }
  p {
    text-transform: uppercase;
    font-size: 700;
    font-size: 13px;
  }
`;
const ButtonC = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
`;
const SubTotal = styled.div`
  width: 100%;
  margin: 10px 0;
  border-top: 2px solid #e8e8e8;
  border-bottom: 2px solid #e8e8e8;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  p {
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:first-of-type {
      margin-bottom: 5px;
    }
  }
`;
const Total = styled.p`
  color: #d32f2f;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bolder;
`;

const CartList: FC<CartListProps> = ({ mode, array}) => {
  const route = useRouter().push;
  const [total, setTotal] = useState(0)
  const handleClick = () => {
    route("/checkout/confirma-datos");
  };
  return (
    <>
      {mode === "complete" ? (
        <div>
          <HeaderList>
            <Info>
              <strong>carrito de compras - artesanías dicar</strong>
              <p>{productsInCart.length} productos</p>
            </Info>
            <ButtonC onClick={handleClick}>
              <Button
                text="Proceder al pago"
                bg="#f6d1bc"
                hover="rgba(246, 209, 188, 0.637)"
              />
            </ButtonC>
          </HeaderList>

          {productsInCart.map((element) => {
            return <CartItem mode="complete" item={element} key={element.id} total={total} setTotal={setTotal} />;
          })}
        </div>
      ) : (
        <Summary>
          {array?.map((element) => {
            return <CartItem mode="summary" item={element} key={element.id} setTotal={setTotal} />;
          })}
          <SubTotal>
            <p>
              subtotal<strong>10.0000</strong>
            </p>
            <p>
              envio <strong>10.0000</strong>
            </p>
          </SubTotal>
          <Total>
            total <strong>34.000</strong>
          </Total>
        </Summary>
      )}
    </>
  );
};

export default CartList;
