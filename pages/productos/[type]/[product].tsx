import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ShopLayout } from "../../../components";
import { useProducts } from "../../../hooks";
import { ProductDetails, ZoomImage } from "../../../components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 78vh;
  @media (max-width: 31.25rem) {
    flex-direction: column;
    height: auto;
  }
`;
const ImageContainer = styled.picture`
  width: 21.875rem;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  margin-right: 2.5rem;
  img {
    border-radius: .625rem;
  }
  @media (max-width: 31.25rem) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1.25rem;
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
