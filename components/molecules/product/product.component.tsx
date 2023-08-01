import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { CardCircular, Icon, Modal, Button } from "../..";
import CartGif from "../../../public/assets/shopping-cart.gif";
import { IProductComponent } from "../../../interfaces/helpers/products";
import { convertPrice } from "../../../helpers/convert-price";
import { useCart } from "../../../hooks/useCart";
import { useModal } from "../../../hooks/useModal";
import { textToHandleCart } from "../../../constants";
import { findItem } from "../../../helpers";

const ProductContainer = styled.article`
  width: max-content;
  height: auto;
  position: relative;
  max-width: 210px;
  p {
    text-align: center;
    margin-top: 20px;
  }
`;
const ImageContainer = styled.div`
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: 5px;
cursor: pointer;
`;
const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
const Text = styled.div<{ size: string; bold: number; aling?: string }>`
  font-weight: ${(props) => props.bold};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.aling || "center"};
  width: 100%;
`;

const Product: FC<IProductComponent> = ({ product }) => {
  const { image, category, id, name, price } = product;
  const { cart, addToCart } = useCart();
  const { status, toggle } = useModal({ initialMode: false });
  const texts = textToHandleCart(name);
  const handleAddToCart = () => {
    addToCart(product);
  };
  const isAdded = findItem({ id, items: cart });
  const cartIcon = isAdded ? "fa-solid fa-circle-check" : "fa-solid fa-cart-shopping";

  return (
    <>
    <ProductContainer>
      <div onClick={toggle}>
        <CardCircular size="33px" top="10px" left="78%">
          <Icon fill={cartIcon} margin="0px" size="14px" />
        </CardCircular>
      </div>
      <Link href={`/productos/${category}/${id}`}>
      <ImageContainer>
        <Image src={image} width="210px" height="232px" alt="Product image" />
      </ImageContainer>
      </Link>
      <InfoContent>
        <Text size="11px" bold={700} aling="end">
          {convertPrice(price)} COP
        </Text>
        <Text size="14px" bold={500}>
          {name}
        </Text>
      </InfoContent>
    </ProductContainer>
      <Modal status={status} setStatus={toggle}>
        <Image src={CartGif} width="60px" height="50px" alt="Cart Gif" />
        {cart.find((item) => item.id === id) ? (
          <p>{texts.updateQuantity}</p>
        ) : (
          <p>{texts.add}</p>
        )}
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
export default Product;
