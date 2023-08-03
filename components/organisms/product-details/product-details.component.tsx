import { FC, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { ProductInfoProps } from "../../../interfaces";
import { findItem, updateLocalStorage } from "../../../utils";
import { INTERRAPIDISIMO_ROUTE, textToHandleCart } from "../../../constants";
import InterRapidisimo from "../../../public/assets/interapisidisimo.png";
import CartGif from "../../../public/assets/shopping-cart.gif";
import { useCart, useModal } from "../../../hooks";
import { useRouter } from "next/router";
import {ListOfSizes, Icon, ProductSpecification, Modal, Button} from '../../../components'

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
const ListSizesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  margin: 5px 0px 5px 0;
  flex-wrap: wrap;
`;

const ProductDetails: FC<ProductInfoProps> = ({ product }) => {
  const navigateTo = useRouter().push;
  const { status, toggle } = useModal({ initialMode: false });
  const { cart, addToCart, updateProductSize } = useCart();
  const [isUpdateModal, setIsUpdateModal] = useState<boolean>(false);
  const [sizeSelected, setSizeSelected] = useState<string>("");

  const isAdded = findItem({ id: product.id, items: cart });
  const verifiedSize: string = isAdded?.size || sizeSelected;
  const texts = textToHandleCart(product?.name || "");
  const modalTexts = isAdded ? texts.updateQuantity : texts.add;

  const handleAddToCart = () => {
    if (isAdded) {
      addToCart({ ...product });
    } else if (sizeSelected) {
      addToCart({ ...product, size: sizeSelected });
    } else {
      alert("Debes seleccionar una talla");
    }
  };

  const handleFastBuy = () => {
    if(!sizeSelected) return alert("Debes seleccionar una talla")
    updateLocalStorage({ state: [product], key: "Fast-buy-dicar" });
    navigateTo("/checkout/compra-rapida");
  };

  const handleUpdateSize = () => {
    updateProductSize({ id: product.id, newSize: sizeSelected });
    setIsUpdateModal(false);
  };

  return (
    <>
      <InfoContainer>
        <ProductSpecification {...product} />
        <small>Tallas</small>
        <ListSizesContainer>
          <ListOfSizes
            category={product.category}
            setSizeSelect={setSizeSelected}
            sizeSelected={verifiedSize}
          />
          {isAdded && (
            <span
              onClick={() => {
                setIsUpdateModal(true);
                toggle();
              }}
            >
              <Icon fill="fa-regular fa-pen-to-square" margin="0px"/>
            </span>
          )}
        </ListSizesContainer>
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
          <a href={INTERRAPIDISIMO_ROUTE} target={"_blank"} rel="noreferrer">
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
        {!isUpdateModal ? (
          <>
            <Image src={CartGif} width="60px" height="50px" alt="Cart Gif" />
            <p>{modalTexts}</p>
          </>
        ) : (
          <ListOfSizes
            category={product.category}
            setSizeSelect={setSizeSelected}
            sizeSelected={sizeSelected}
          />
        )}
        <Button
          text="Confirmar"
          bg="#f6d1bc"
          hover="rgba(246, 209, 188, 0.637)"
          mt="20px"
          width="200px"
          onClick={() => {
            !isUpdateModal ? handleAddToCart() : handleUpdateSize();
            toggle();
          }}
        />
      </Modal>
    </>
  );
};
export default ProductDetails;
