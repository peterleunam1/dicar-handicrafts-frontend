import { FC } from "react";
import { CartItem } from "../../../components";
import { cart } from "../../../constants";
import { getTotalPrice, convertPrice } from "../../../utils";
import { SummaryProps } from "../../../interfaces";
import { Card, Content, SubTotal, Total } from "./summary.styled";

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
