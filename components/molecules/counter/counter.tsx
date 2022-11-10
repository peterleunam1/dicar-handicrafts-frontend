import { FC, useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../components";
import { CounterProps } from "../../../interfaces";

const Container = styled.span`
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    font-weight: 380;
  }
`;
const CircularCard = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #606060;
  border-radius: 50%;
  cursor: pointer;
`;

const Counter: FC<CounterProps> = ({ onAction }) => {
  const [counter, setCounter] = useState(1);

  const subtract = () => {
    counter > 0
      ? setCounter((prev) => {
          onAction(prev - 1);
          return prev - 1;
        })
      : setCounter(0);
  };

  const Add = () => {
    setCounter((prev) => {
      onAction(prev + 1);
      return prev + 1;
    });
  };

  return (
    <Container>
      <CircularCard onClick={() => subtract()}>
        <Icon
          fill="fa-solid fa-minus"
          margin="0px"
          size="14px"
          color="rgb(202, 199, 199)"
        />
      </CircularCard>
      <span> {` ${counter} `} </span>
      <CircularCard onClick={Add}>
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
