import { FC } from "react";
import styled from "styled-components";
import { CartItem } from "../..";
import { convertPrice } from "../../../helpers/convert-price";
// import useCart from "../../../hooks/useCart";
// import useTotalCart from "../../../hooks/useTotalCart";
import { cart } from "../../../constants";
import { useCart } from "../../../hooks/useCart";
import { getTotalPrice } from "../../../helpers";
import { SummaryProps } from "../../../interfaces/organisms/summary";

const Card = styled.article`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 20px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  h3 {
    margin-bottom: 15px;
  }
  @media (max-width: 500px) {
    width: 88%;
    margin-top: 20px;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Summary: FC<SummaryProps> = ({ products, type }) => {
  const total = getTotalPrice({ products, type });
  return (
    <Card>
      <h3>Resumen</h3>
      <Content>
        {products.map((element) => {
          return <CartItem mode="summary" item={element} key={element.id} />;
        })}
        <SubTotal>
          <p>
            {cart.subtotal}
            <strong>{convertPrice(total)}</strong>
          </p>
          <p>
            {cart.shipping} <strong>{convertPrice(10000)}</strong>
          </p>
        </SubTotal>
        <Total>
          {cart.total.toLocaleLowerCase()}
          <strong>{convertPrice(total + 10000)}</strong>
        </Total>
      </Content>
    </Card>
  );
};
export default Summary;
