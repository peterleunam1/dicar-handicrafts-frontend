import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { OffersProps } from "../../../interfaces";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px auto 50px auto;
  width: 95%;
  background-color: ${(props) => props.theme.card};
  border-radius: 10px;
  overflow: hidden;
  span {
    @media (max-width: 500px) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    padding: 20px 0px;
  }
`;

const SubContainer = styled.div<{ width: string; sizeText: string }>`
  max-width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    max-width: unset;
    width: 100%;
  }
  article {
    margin: 10px 0px 20px 8%;
    @media (max-width: 500px) {
      margin: 10px 0px;
    }
  }
  p {
    width: 82%;
    font-size: ${(props) => props.sizeText};
    text-align: center;
    width: 92%;
  }
`;
const StrongText = styled.strong<{ size?: string }>`
  font-weight: bolder;
  color: #f6d1bc;
  font-size: ${(props) => props.size || "22px"};
`;

const Title = styled.h2`
  font-weight: bolder;
  width: 82%;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 500px) {
    width: 100%;
    font-size: 20px;
  }
`;
// https://i.imgur.com/GjxYwv6.mp4

const Offers: FC<OffersProps> = ({ type, urlMultimedia, children }) => {
  return (
    <Container>
      <span>
        {type === "video" ? (
          <video autoPlay loop width={"auto"} height={500} controls>
            <source src={urlMultimedia} type="video/mp4" />
          </video>
        ) : (
          <Image width={"auto"} src={urlMultimedia} height="500px" />
        )}
      </span>
      <SubContainer width="85%" sizeText="12px">
        <Title>
          Disfruta de nuestros{" "}
          <StrongText size="24px">combos especiales</StrongText>
        </Title>
        <article>{children}</article>
        <p>
          Por la compra de los tres productos recibe un{" "}
          <StrongText size="12px">descuento</StrongText> de hasta el 20% en el
          total de tu factura, para mayor información{" "}
          <StrongText size="12px">comunicate </StrongText>con nosotros a través
          de nuestras
          <StrongText size="12px"> redes sociales</StrongText>.
        </p>
      </SubContainer>
    </Container>
  );
};

export default Offers;
