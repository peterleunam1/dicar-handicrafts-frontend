import { FC, useState } from "react";
import Image from "next/image";
import { ProductInfoProps } from "../../../interfaces";
import { findItem, updateLocalStorage } from "../../../utils";
import { INTERRAPIDISIMO_ROUTE, textToHandleCart } from "../../../constants";
import { useCart, useModal } from "../../../hooks";
import { useRouter } from "next/router";
import {
  ListOfSizes,
  Icon,
  ProductSpecification,
  Modal,
  Button,
} from "../../../components";
import {
  ButtonContent,
  FigCaption,
  InfoContainer,
  ListSizesContainer,
  SendType,
} from "./product-details.styled";
import InterRapidisimo from "../../../public/assets/interapisidisimo.png";
import CartGif from "../../../public/assets/shopping-cart.gif";

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
    if (!sizeSelected) return alert("Debes seleccionar una talla");
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
              <Icon fill="fa-regular fa-pen-to-square" margin="0" />
            </span>
          )}
        </ListSizesContainer>
        <Button
          bg="#f6d1bc"
          hover="rgba(246, 209, 188, 0.637)"
          mt="1.5625rem"
          mb=".625rem"
          onClick={toggle}
        >
          <ButtonContent>
            {isAdded && <Icon fill="fa-solid fa-circle-check" margin="0" />}
            <p>{isAdded ? texts.other : texts.cart}</p>
          </ButtonContent>
        </Button>
        <Button
          bg="#fff"
          hover="rgba(246, 209, 188, 0.637)"
          border=" .0938rem solid #f6d1bc"
          onClick={handleFastBuy}
          text={texts.buy}
        />
        <SendType>
          <FigCaption>Envios a través de:</FigCaption>
          <a href={INTERRAPIDISIMO_ROUTE} target={"_blank"} rel="noreferrer">
            <Image
              src={InterRapidisimo}
              width="8.4375rem"
              height="1.875rem"
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
          mt="1.25rem"
          width="12.5rem"
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
