import { FC, useContext, useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../components";
import ContextCart from "../../../context/CartContext";
import { CounterProps } from "../../../interfaces";
import addProduct from "../../../services/products/addproduct";

const Container = styled.span`
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    font-weight: 380;
  }
  @media (max-width: 500px) {
    margin:14px 0px;
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
  &:hover{
    background-color: #606060;
    transition: ease 1s background-color;
  }
`;

const Counter: FC<CounterProps> = ({counter, setCounter}) => {
  return (
    <Container>
      <CircularCard onClick={
        () => {
          counter > 1
            ? setCounter( counter - 1)
            : setCounter(1);
        }
      } >
        <Icon
          fill="fa-solid fa-minus"
          margin="0px"
          size="14px"
          color="rgb(202, 199, 199)"
        />
      </CircularCard>
      <span>{`${counter}`}</span>
      <CircularCard onClick={
        () => {
          setCounter(counter + 1);
        }
      } >
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
