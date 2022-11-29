import { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import styled from "styled-components";
import { Button, ShopLayout } from "../../components";
import CartEmpty from "../../public/assets/cart.png";

const Container = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 64px;
  height: 64px;
`;
const Info = styled.div`
width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  h2{
    text-align: center;
  }
`;
const ButtonContainer = styled.div`
    width: 25%;
`;
const EmptyPage: NextPage = () => {
  return (
    <ShopLayout
      title="Carrito vació"
      descriptionPage="No hay artículos en el carrito de compras"
    >
      <Container>
        <ImageContainer>
          <Image
            src={CartEmpty}
            width="64px"
            height="64px"
            layout="responsive"
          />
        </ImageContainer>
        <Info>
            <h2>No hay productos dentro del carrito</h2>
        </Info>
      </Container>
    </ShopLayout>
  );
};

export default EmptyPage;
