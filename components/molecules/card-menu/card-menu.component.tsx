import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardMenuProps } from "../../../interfaces";
import { ImageContainer, ProductContainer, Title } from "./card-menu.styled";

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
          <Image
            src={src}
            width="15.625rem"
            height="17.625rem"
            alt={title.toUpperCase()}
          />
        </ImageContainer>
        <Title transform={hover ? "translateY(0)" : "translateY(3.125rem)"}>
          {title.toUpperCase()}
        </Title>
      </ProductContainer>
    </Link>
  );
};
export default CardMenu;

