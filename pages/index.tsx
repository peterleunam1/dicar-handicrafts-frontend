import type { NextPage } from "next";
import styled from "styled-components";
import {
  ShopLayout,
  Menu,
  SlideShow,
  ProductList,
  Offers,
} from "../components";
import Mochila from "../public/assets/mochilas.png";
import Sandalia from "../public/assets/sandalias.png";
import Sombrero from "../public/assets/sombreros.png";
import Accesorio from "../public/assets/accesorios.png";
import { products_combo, slideImages } from "../constants";


const SliderContainer = styled.div`
  width: 60%;
  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;
const Wrapper = styled.div<{ width: string; sizeText: string }>`
  max-width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  article {
    margin: .625rem 0 1.25rem 0;
  }
  p {
    width: 82%;
    font-size: ${(props) => props.sizeText};
    @media (max-width: 31.25rem) {
      font-size: 1rem;
      width: 100%;
    }
  }
  @media (max-width: 31.25rem) {
    max-width: unset;
    width: 100%;
  }
`;
const ArtSection = styled.section<{ bg?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5625rem auto 0 auto;
  width: 95%;
  background-color: ${(props) => props.bg};
  border-radius: .625rem;

  @media (max-width: 31.25rem) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;
const StrongText = styled.strong<{ size?: string }>`
  font-weight: bolder;
  color: #f6d1bc;
  font-size: ${(props) => props.size || "1.25rem"};
  @media (max-width: 31.25rem) {
    color: ${(props) => props.theme.text};
    font-size: .9375rem;
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  margin: 1.25rem 0;
  @media (max-width: 31.25rem) {
    font-size: 1rem;
    margin: 0;
    width: 100%;
    text-align: left;
  }
`;
const Title = styled.h3`
  font-weight: bolder;
  width: 100%;
  text-transform: uppercase;
  padding-left: 4.0625rem;
  @media (max-width: 31.25rem) {
    padding-left: 0;
  }
`;

const Divisor = styled.div`
  height: 32vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 2.8125rem auto;
  background: url("../assets/bg-pattern-circles.svg");
  background-size: cover;
  background-repeat: no-repeat top;
  background-position: bottom;
  @media (max-width: 31.25rem) {
    width: 100%;
  }
  p {
    width: 43%;
    margin: 0;
    padding: 0;
    font-size: 1.1875rem;
    text-align: center;
    font-family: ibm-plex-mono, sans-serif;
    font-style: normal;
    font-weight: 100;
    @media (max-width: 31.25rem) {
      width: 100%;
    }
  }
`;

const Home: NextPage = () => {
  const images = [Mochila, Sandalia, Sombrero, Accesorio];
  return (
    <ShopLayout
      title={"Home"}
      descriptionPage="Pagina principal de artesanias dicar"
    >
      <Menu images={images}></Menu>
      <Divisor>
        <p>
          Detrás de cada una de nuestras{" "}
          <StrongText size="1.1875rem">creaciones</StrongText> esta una{" "}
          <StrongText size="1.1875rem">artesana wayuu </StrongText> resaltando toda
          su cultura, historia y tradición en
          <StrongText size="1.1875rem"> cada pieza.</StrongText>
        </p>
      </Divisor>
      <Offers type="video" urlMultimedia="https://i.imgur.com/GjxYwv6.mp4">
        <ProductList products={products_combo} />
      </Offers>
      <Title>Artes ancestrales</Title>
      <ArtSection>
        <Wrapper width="38%" sizeText="1.125rem">
          <Text>
            El tejido para el pueblo wuayúu es más que una práctica cultural y{" "}
            <StrongText>herencia de sus ancestros</StrongText>, es una forma de{" "}
            <StrongText>concebir y expresar</StrongText> la vida tal como la
            sienten y la desean. Un arte pensado y{" "}
            <StrongText>gozado</StrongText>. La observación de sus innumerables
            tejidos les permite leer <StrongText>el espíritu</StrongText> que
            guía su acción y pensamiento.
          </Text>
        </Wrapper>
        <SliderContainer>
          <SlideShow images={slideImages} />
        </SliderContainer>
      </ArtSection>
    </ShopLayout>
  );
};

export default Home;
