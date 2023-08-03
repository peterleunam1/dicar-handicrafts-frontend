import { FC } from "react";
import Image from "next/image";
import CartEmpty from "../../../public/assets/cart.png";
import { cart } from "../../../constants";
import { Container, ImageContainer, Info } from "./empty-cart.styled";

const EmptyCart: FC = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={CartEmpty}
          width="4rem"
          height="4rem"
          layout="responsive"
          alt="empty-cart"
        />
      </ImageContainer>
      <Info>
        <h2>{cart.empty}</h2>
      </Info>
    </Container>
  );
};
export default EmptyCart;
