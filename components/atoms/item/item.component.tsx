import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import { CartItemProps } from "../../../interfaces";
import { convertPrice } from "../../../helpers/convert-price";

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
`;
const Images = styled.figure`
  width: 55px;
  height: 65px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 9vh;
  width: 67%;
  padding-left: 18px;
`;
const Title = styled.strong`
  font-size: 14px;
  font-weight: 500;
  width: 200px;
`;
const Price = styled.p`
  font-size: 13px;
  margin-top: 3px;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 9vh;
  width: 15%;
`;

const Item: FC<CartItemProps> = ({ item, qt }) => {
  const { image, price, name } = item;
  return (
    <Row>
      <Images>
        <Image src={image} width="50px" height="60px" layout="responsive" alt="item"/>
      </Images>
      <Info>
        <Title>{name}</Title>
        <Price>{convertPrice(price)}</Price>
      </Info>
      <Count>x {qt}</Count>
    </Row>
  );
};
export default Item;
