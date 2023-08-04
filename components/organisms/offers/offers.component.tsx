import { FC } from "react";
import Image from "next/image";
import { OffersProps } from "../../../interfaces";
import { Container, StrongText, SubContainer, Title } from "./offers.styled";

const Offers: FC<OffersProps> = ({ type, urlMultimedia, children }) => {
  return (
    <Container>
      <span>
        {type === "video" ? (
          <video autoPlay loop width={"auto"} height={500} controls>
            <source src={urlMultimedia} type="video/mp4" />
          </video>
        ) : (
          <Image
            width={"auto"}
            src={urlMultimedia}
            height="500px"
            alt="offer"
          />
        )}
      </span>
      <SubContainer width="85%" sizeText=".75rem">
        <Title>
          Disfruta de nuestros
          <StrongText size="1.5rem">combos especiales</StrongText>
        </Title>
        <article>{children}</article>
        <p>
          Por la compra de los tres productos recibe un
          <StrongText size=".75rem">descuento</StrongText> de hasta el 20% en el
          total de tu factura, para mayor información
          <StrongText size=".75rem">comunicate </StrongText>con nosotros a través
          de nuestras
          <StrongText size=".75rem"> redes sociales</StrongText>.
        </p>
      </SubContainer>
    </Container>
  );
};

export default Offers;
