import { FC } from "react";
import Image from "next/image";
import { CartItemProps } from "../../../interfaces";
import { convertPrice } from "../../../utils/convert-price.util";
import { Row, Count, Images, Info, Price, Title } from "./item.styled";

const Item: FC<CartItemProps> = ({ item }) => {
  const { image, price, name, quantity } = item;
  return (
    <Row>
      <Images>
        <Image
          src={image}
          width="50px"
          height="60px"
          layout="responsive"
          alt={name}
        />
      </Images>
      <Info>
        <Title>{name}</Title>
        <Price>{convertPrice(price)}</Price>
      </Info>
      <Count>x {quantity || 1}</Count>
    </Row>
  );
};
export default Item;
