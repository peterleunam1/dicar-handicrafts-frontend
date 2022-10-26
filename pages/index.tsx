import type { NextPage } from "next";
import styled from "styled-components";
import { ShopLayout, Menu, SlideShow } from "../components";
import Mochila from "../public/assets/mochilas.png";
import Sandalia from "../public/assets/sandalias.png";
import Sombrero from "../public/assets/sombreros.png";
import Accesorio from "../public/assets/accesorios.png";
import { slideImages } from "../helpers";

const SliderContainer = styled.div`
  width: 45%;
`;
const ArtSection = styled.section`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;
const StrongText = styled.strong`
  font-weight: 600;
`;
const Text = styled.p`
  font-size: 18px;
  width: 50%;
  margin-bottom: 20px;
`;
const Title = styled.h2`
  padding: 0px 5%;
`;

const Home: NextPage = () => {
  const images = [Mochila, Sandalia, Sombrero, Accesorio];

  return (
    <ShopLayout
      title="Home"
      descriptionPage="Pagina principal de artesanias dicar"
    >
      <Menu images={images}></Menu>
      <Title>Artes ancestrales</Title>
      <ArtSection>
        <SliderContainer>
          <SlideShow images={slideImages} />
        </SliderContainer>
        <Text>
          La <StrongText>expresión artística</StrongText> de la cultura wayúu
          fue básicamente el área textil, iniciando con las hamacas y
          chinchorros; productos de fabricación autóctona por parte de esta{" "}
          <StrongText>cultura</StrongText>, así como también otro tipo de
          implementos tejidos. Como es el caso de tejidos de figuras
          geométricas, conocido con el nombre de Kanas; a esto le agregamos la
          fabricación de mantas, tambores, sombreros de palma, mochilas y
          alpargatas. <br /><br />
          El tejido para el pueblo wuayúu es más que una práctica
          cultural y <StrongText>herencia de sus ancestros</StrongText>, es una
          forma de <StrongText>concebir y expresar</StrongText> la vida tal como
          la sienten y la desean. Un arte pensado y gozado. La observación de
          sus innumerables tejidos les permite{" "}
          <StrongText>leer el espíritu</StrongText> que guía su acción y
          pensamiento.
        </Text>
      </ArtSection>
    </ShopLayout>
  );
};

export default Home;
