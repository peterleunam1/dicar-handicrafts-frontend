import { FC, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import Products from "../../../public/assets/product.jpeg";
import { CardCircular, Icon } from "../../../components";

const ProductContainer = styled.article`
  width: max-content;
  height: auto;
  position: relative;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: 5px;
`;
const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
const Text = styled.div<{ size: string; bold: number; aling?: string }>`
  font-weight: ${(props) => props.bold};
  font-size: ${(props) => props.size};
  align-self: ${(props) => props.aling || ""};
`;
const Product: FC = () => {
    const [isFavorite, setIsFavorite] = useState(false);
  

    
  return (
    <ProductContainer>
      <CardCircular bg="#F6D1BC" size="33px" top="10px" left="78%">
        <Icon fill="fa-solid fa-cart-shopping" margin="0px" size="14px"/>
      </CardCircular>
      <CardCircular bg="#fff" size="33px" top="50px" left="78%">
       <span onClick={() => setIsFavorite(!isFavorite)}>
        {
          isFavorite ?  <Icon fill="fa-solid fa-star" margin="0px" size="14px" color="#fdfd96" hover="none"/> :
          <Icon fill="fa-regular fa-star" margin="0px" size="14px" color="#606060" hover="none"/>
        }
       </span>
      </CardCircular>
      <ImageContainer>
        <Image src={Products} width="210px" height="232px" />
      </ImageContainer>
      <InfoContent>
        <Text size="11px" bold={700} aling="end">
          {" "}
          $4.004382.3
        </Text>
        <Text size="17px" bold={500}>
          Producto 1
        </Text>
        <Text size="11px" bold={400}>
          Lorem ipsum dolor sit.
        </Text>
      </InfoContent>
    </ProductContainer>
  );
};
export default Product;
