import { FC } from "react";
import { Icon } from "../..";
import { CounterProps } from "../../../interfaces";
import { useCart } from "../../../hooks";
import { Container, CircularCard } from "./counter.styled";

const Counter: FC<CounterProps> = ({ product }) => {
  const { quantity } = product;
  const { addToCart, substractCounterFromCart } = useCart();

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
          margin="0"
          size=".875rem"
          color="rgb(202, 199, 199)"
        />
      </CircularCard>
      <span>{quantity}</span>
      <CircularCard onClick={handleIncrement}>
        <Icon
          fill="fa-solid fa-plus"
          margin="0"
          size=".8125rem"
          color="rgb(202, 199, 199)"
        />
      </CircularCard>
    </Container>
  );
};
export default Counter;
