import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../..";
import { CounterProps } from "../../../interfaces";
import { useCart } from "../../../hooks/useCart";

const Container = styled.span`
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 380;
  }
  @media (max-width: 500px) {
    margin: 14px 0px;
  }
`;
const CircularCard = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #606060;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #606060;
    transition: ease 1s background-color;
  }
`;

const Counter: FC<CounterProps> = ({ product }) => {
  const { quantity } = product;
  const { addToCart, substractCounterFromCart } =
    useCart();

  const handleIncrement = () => {
    addToCart(product);
  };

  const handleDecrement = () => {
    substractCounterFromCart(product);
  };

  return (
    <Container>
      <CircularCard onClick={handleDecrement}>
        <Icon
          fill="fa-solid fa-minus"
          margin="0px"
          size="14px"
          color="rgb(202, 199, 199)"
        />
      </CircularCard>
      <span>{quantity}</span>
      <CircularCard onClick={handleIncrement}>
        <Icon
          fill="fa-solid fa-plus"
          margin="0px"
          size="13px"
          color="rgb(202, 199, 199)"
        />
      </CircularCard>
    </Container>
  );
};
export default Counter;
