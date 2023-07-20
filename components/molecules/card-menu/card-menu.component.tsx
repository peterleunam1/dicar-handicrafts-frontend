import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { CardMenuProps } from "../../../interfaces";

const ProductContainer = styled.article<{ show: string }>`
  width: max-content;
  height: auto;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.25);
    visibility: ${(props) => props.show};
    @media (max-width: 500px) {
      visibility: visible;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: 5px;
`;
const Title = styled.h2<{ transform: string }>`
  position: absolute;
  top: 82%;
  left: 20%;
  text-align: center;
  transform: ${(props) => props.transform};
  transition: 0.7s ease transform;
  color: #ffff;
  z-index: 1;
  @media (max-width: 500px) {
    transform: translateY(0px);
    bottom: 5%;
    left: 0%;
    width: 100%;
    font-size: 1.2rem;
  }
`;

const CardMenu: FC<CardMenuProps> = ({ src, title }) => {

  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link href={`/productos/${title}`}>
      <ProductContainer
        show={hover ? "visible" : "hidden"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ImageContainer>
          <Image src={src} width="250px" height="282px" alt={title.toUpperCase()} />
        </ImageContainer>
        <Title transform={hover ? "translateY(0px)" : "translateY(50px)"}>
          {title.toUpperCase()}
        </Title>
      </ProductContainer>
    </Link>
  );
};
export default CardMenu;
