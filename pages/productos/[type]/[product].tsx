import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { Button, Modal, ShopLayout } from "../../../components";
import InterRapidisimo from "../../../public/assets/interapisidisimo.png";
import useProducts from "../../../hooks/useProducts";
import { IProduct } from "../../../interfaces";
import { convertPrice } from "../../../helpers/convert-price";
import useAddToCart from "../../../hooks/useAddToCart";
import CartGif from "../../../public/assets/shopping-cart.gif";

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
const ImageContainer = styled.figure`
  width: 350px;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  margin-right: 40px;
  background-color: aliceblue;
  img {
    border-radius: 10px;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
const ButtonC = styled.div`
  width: 200px;
`;

const InfoContainer = styled.aside`
  height: 450px;
  width: 30%;
  height: auto;
  margin-left: 40px;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    height: 5px;
    background-color: #f6d1bc;
    border-radius: 5px;
  }
  h2 {
    margin: 15px 0px 8px 0;
  }
`;

const Text = styled.p`
  margin: 18px 0;
  font-size: 13px;
`;
const AccentTex = styled.strong<{ size?: string; ml?: string; color?: string }>`
  color: ${(props) => props.color || "#f6d1bc"};
  font-size: ${(props) => props.size};
  margin-left: ${(props) => props.ml};
`;
const StrikeText = styled.div`
  position: relative;
  width: max-content;
  padding: 0px 8px;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background-color: #000;
    border-radius: 5px;
  }
`;
const Price = styled.p`
  font-size: 23px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;
const SendType = styled.figure`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  margin: 20px 0px;
  a {
    cursor: pointer;
  }
`;
const FigCaption = styled.figcaption`
  margin-right: 10px;
`;

const Type: NextPage = () => {
  const { product: param, type } = useRouter().query;
  const { products } = useProducts({ category: type as string });

  const product: IProduct = products?.find((x) => x.id === Number(param)) as IProduct;

  const { handleConfirmCart, modal, setModal } = useAddToCart(product);

  const Desc = (price: number): string => {
    const desc: number = price * 0.3;
    const newPrice: number = price++ + desc;
    return convertPrice(newPrice);
  };

  return (
    <ShopLayout
      title={`${type}`}
      descriptionPage="Mejores mochilas artesanales de la ciudad"
    >
      {product ? (
        <Container>
          <ImageContainer>
            <InnerImageZoom
              src={product.image}
              zoomSrc={product.image}
              zoomType="hover"
              zoomScale={0.7}
            />
          </ImageContainer>
          <InfoContainer>
            <h2>{product?.name}</h2>
            <p>{product?.description}</p>
            <Text>
              Vendido y entregado por <AccentTex>Artesanías Dicar</AccentTex>
            </Text>
            <StrikeText>{`${Desc(product.price)}`}</StrikeText>
            <Price>
              {convertPrice(product.price)}{" "}
              <AccentTex size="15px" ml="8px">
                -30%
              </AccentTex>
            </Price>
            {product.qty_in_stock !== 0 ? (
              <AccentTex color="lightgreen">Disponible</AccentTex>
            ) : (
              <AccentTex color="#ff4142">Agotado</AccentTex>
            )}

            <div onClick={() => setModal(true)}>
              <Button
                text="Agregar al carrito"
                bg="#f6d1bc"
                hover="rgba(246, 209, 188, 0.637)"
                mt="25px"
                mb="10px"
              />
            </div>

            <div>
              <Button
                text="Comprar rápida"
                bg="#fff"
                hover="rgba(246, 209, 188, 0.637)"
                border=" 1.5px solid #f6d1bc"
              />
            </div>
            <SendType>
              <FigCaption>Envios a través de:</FigCaption>
              <a
                href="https://www.interrapidisimo.com/sigue-tu-envio/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Image
                  src={InterRapidisimo}
                  width="135x"
                  height="30px"
                  alt="Product image"
                />
              </a>
            </SendType>
          </InfoContainer>
          <Modal status={modal} setStatus={setModal}>
            <Image src={CartGif} width="60px" height="50px" alt="Cart Gif" />
            <p>
              ¿Desea agregar el producto{" "}
              <strong>{product.name.toLocaleLowerCase()}</strong> al carrito?
            </p>
            <ButtonC
              onClick={() => {
                handleConfirmCart();
                setModal(false);
              }}
            >
              <Button
                text="Confirmar"
                bg="#f6d1bc"
                hover="rgba(246, 209, 188, 0.637)"
                mt="20px"
              />
            </ButtonC>
          </Modal>
        </Container>
      ) : (
        <p>Cargando...</p>
      )}
    </ShopLayout>
  );
};
export default Type;
