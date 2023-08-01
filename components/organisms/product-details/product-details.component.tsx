import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { IProduct, ProductInfoProps } from "../../../interfaces";
import { findItem, updateLocalStorage } from "../../../helpers";
import Button from "../../atoms/button/button.component";
import { useModal } from "../../../hooks/useModal";
import { textToHandleCart } from "../../../constants";
import Modal from "../../molecules/modal/modal.component";
import InterRapidisimo from "../../../public/assets/interapisidisimo.png";
import CartGif from "../../../public/assets/shopping-cart.gif";
import { useCart } from "../../../hooks/useCart";
import ProductSpecification from "../../molecules/product-specification/product-specification.component";
import Icon from "../../atoms/icon/icon.component";
import { useRouter } from "next/router";
import { useNavigate } from "../../../hooks/useNavigate";

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
const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const FigCaption = styled.figcaption`
  margin-right: 10px;
`;

const ProductDetails: FC<ProductInfoProps> = ({ product }) => {
  // const {navigateTo} = useNavigate()
  const navigateTo = useRouter().push
  const { status, toggle } = useModal({ initialMode: false });
  const texts = textToHandleCart(product?.name || "");
  const { cart, addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product || ({} as IProduct));
  };
  const isAdded = findItem({ id: product.id, items: cart });

  const handleFastBuy = () => {
    updateLocalStorage({state: [product], key:"Fast-buy-dicar"})
    navigateTo("/checkout/compra-rapida")
  }

  return (
    <>
      <InfoContainer>
        <ProductSpecification {...product} />
        <Button
          bg="#f6d1bc"
          hover="rgba(246, 209, 188, 0.637)"
          mt="25px"
          mb="10px"
          onClick={toggle}
        >
          <ButtonContent>
            {isAdded && <Icon fill="fa-solid fa-circle-check" margin="0px" />}
            <p>{isAdded ? texts.other : texts.cart}</p>
          </ButtonContent>
        </Button>
        <Button
          bg="#fff"
          hover="rgba(246, 209, 188, 0.637)"
          border=" 1.5px solid #f6d1bc"
          onClick={handleFastBuy}
          text={texts.buy}
        />
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
      <Modal status={status} setStatus={toggle}>
        <Image src={CartGif} width="60px" height="50px" alt="Cart Gif" />
        {isAdded ? <p>{texts.updateQuantity}</p> : <p>{texts.add}</p>}
        <Button
          text="Confirmar"
          bg="#f6d1bc"
          hover="rgba(246, 209, 188, 0.637)"
          mt="20px"
          width="200px"
          onClick={() => {
            handleAddToCart();
            toggle();
          }}
        />
      </Modal>
    </>
  );
};
export default ProductDetails;
