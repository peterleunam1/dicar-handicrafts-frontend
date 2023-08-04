import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardCircular, Icon, Modal, ConfirmCart } from "../../../components";
import { IProductComponent } from "../../../interfaces";
import { convertPrice } from "../../../utils/convert-price.util";
import { useCart, useModal } from "../../../hooks";
import { findItem } from "../../../utils";
import {
  ImageContainer,
  ProductContainer,
  InfoContent,
  Text,
} from "./product.styled";

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
          <CardCircular size="2.0625rem" top=".625rem" left="78%">
            <Icon fill={cartIcon} margin="0" size=".875rem" />
          </CardCircular>
        </div>
        <Link href={`/productos/${category}/${id}`}>
          <ImageContainer>
            <Image
              src={image}
              width="210px"
              height="232px"
              alt={name}
            />
          </ImageContainer>
        </Link>
        <InfoContent>
          <Text size=".6875rem" bold={700} aling="end">
            {convertPrice(price)} COP
          </Text>
          <Text size=".875rem" bold={500}>
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
