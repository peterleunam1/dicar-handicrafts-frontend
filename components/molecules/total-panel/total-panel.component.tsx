import { FC } from "react";
import styled from "styled-components";
import { convertPrice } from "../../../helpers/convert-price";
import { Button } from "../../../components";
import { TotalPanelProps } from "../../../interfaces";
import { cart } from "../../../constants";

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
const TotalComplete = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
`;
const TotalRight = styled.div`
  width: 76%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  @media (max-width: 500px) {
    width: 30%;
  }
`;
const TotalLeft = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  border-left: 1px solid #e8e8e8;
  margin: 15px 0;
  @media (max-width: 500px) {
    width: 70%;
  }
`;
const SubTotalComplete = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: normal;
  background-color: ${(props) => props.theme.card};
  padding: 5px 15px;
  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
  }
`;
const TotalContainer = styled.div`
  padding: 5px 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

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
