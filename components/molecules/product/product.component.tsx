import { FC, useState } from "react";
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
import ConfirmCart from "../../organisms/confirm-cart/confirm-cart.component";

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
  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 232px;
      background-color: rgba(0, 0, 0, 0.05);
      z-index: 1;
    }
  }
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
  const { cart } = useCart();
  const { status, toggle } = useModal({ initialMode: false });
  const isAdded = findItem({ id, items: cart });

  const cartIcon = isAdded
    ? "fa-solid fa-circle-check"
    : "fa-solid fa-cart-shopping";

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
            <Image
              src={image}
              width="210px"
              height="232px"
              alt="Product image"
            />
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
        <ConfirmCart product={product} toggle={toggle} />
      </Modal>
    </>
  );
};
export default Product;
