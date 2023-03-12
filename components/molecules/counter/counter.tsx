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
  border-radius: 50%;
  cursor: pointer;
`;

const Counter: FC<CounterProps> = ({id, onAction, qty}) => {
  const [counter, setCounter] = useState(qty);
const {setUpdate} = useContext(ContextCart)
  // const subtract = async () => {
  //   await deleteItemFromCart({
  //     product_id: id,
  //   }).then((res) => { 
  //     setUpdate(true)
  //   });
  //   counter > 0
  //     ? setCounter((prev:number) => {
  //         onAction(prev - 1);
  //         return prev - 1;
  //       })
  //     : setCounter(0);
  // };

  // const Add = async() => {
  //   await addProductToCart({
  //     product_id: id,
  //   }).then((res) => {
  //     setUpdate(true)
  //   });
  //   setCounter((prev:number) => {
  //     onAction(prev + 1);
  //     return prev + 1;
  //   });
  // };


  return (
    <Container>
      {/* <CircularCard onClick={()=>subtract()}>
        <Icon
          fill="fa-solid fa-minus"
          margin="0px"
          size="14px"
          color="rgb(202, 199, 199)"
        />
      </CircularCard>
      <span>{`${counter}`}</span>
      <CircularCard onClick={()=>Add()}>
        <Icon
          fill="fa-solid fa-plus"
          margin="0px"
          size="13px"
          color="rgb(202, 199, 199)"
        />
      </CircularCard> */}
      counter
    </Container>
  );
};
export default Counter;
