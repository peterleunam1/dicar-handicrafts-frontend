import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ShopLayout } from "../../../components";
import useProducts from "../../../hooks/useProducts";
import { ProductDetails, ZoomImage } from "../../../components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 78vh;
  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
  }
`;
const ImageContainer = styled.picture`
  width: 350px;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  margin-right: 40px;
  img {
    border-radius: 10px;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Type: NextPage = () => {
  const { product: id, type } = useRouter().query;
  const { filteredProduct: product } = useProducts({
    category: type as string,
    filterById: Number(id),
  });

  return (
    <ShopLayout
      title={`${type}`}
      descriptionPage="Mejores mochilas artesanales de la ciudad"
    >
      {product ? (
        <Container>
          <ImageContainer>
            <ZoomImage src={product.image} scale={0.7} />
          </ImageContainer>
          <ProductDetails product={product} />
        </Container>
      ) : (
        <p>Cargando...</p>
      )}
    </ShopLayout>
  );
};
export default Type;
