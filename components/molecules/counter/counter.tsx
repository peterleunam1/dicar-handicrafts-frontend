import { FC, useState } from "react";
import styled from "styled-components";
import {Icon} from "../../../components";

const Container = styled.span`
width: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const CircularCard = styled.div`
width: 28px;
height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #606060;
  border-radius: 50%;
  cursor: pointer;

`;

const Counter: FC = () => {

  const [counter, setCounter] = useState(0);

  const subtract = (number: number) => {
    number > 0 ? setCounter((i) => i - 1) : setCounter(0);
  };

  return (
    <Container>
    <CircularCard onClick={() => subtract(counter)}><Icon fill="fa-solid fa-minus" margin="0px" size="14px" color="rgb(202, 199, 199)"/></CircularCard>
      <strong>{counter}</strong>
      <CircularCard onClick={() => setCounter((i) => i + 1)}><Icon fill="fa-solid fa-plus" margin="0px" size="13px" color="rgb(202, 199, 199)"/></CircularCard>
    </Container>
  );
};
export default Counter;
