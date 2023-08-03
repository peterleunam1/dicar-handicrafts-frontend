import { FC } from "react";
import { convertPrice } from "../../../utils/convert-price.util";
import { Button } from "../../../components";
import { TotalPanelProps } from "../../../interfaces";
import { cart } from "../../../constants";
import {
  TotalComplete,
  TotalRight,
  TotalLeft,
  SubTotalComplete,
  TotalContainer,
  ButtonContainer,
} from "./total-panel.styled";

const TotalPanel: FC<TotalPanelProps> = ({ total, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <TotalComplete>
      <TotalRight>{cart.total}</TotalRight>
      <TotalLeft>
        <SubTotalComplete>
          <span>
            {cart.subtotal}:<strong>{convertPrice(total)}</strong>
          </span>
          <span>
            {cart.shipping}:<p>{convertPrice(10000)}</p>
          </span>
        </SubTotalComplete>
        <TotalContainer>
          {cart.total}: <span>{convertPrice(total + 10000)}</span>
        </TotalContainer>
        <ButtonContainer>
          <Button
            text="Proceder al pago"
            bg="#f6d1bc"
            hover="rgba(246, 209, 188, 0.637)"
            onClick={handleClick}
          />
        </ButtonContainer>
      </TotalLeft>
    </TotalComplete>
  );
};
export default TotalPanel;
