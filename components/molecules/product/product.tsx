import { FC, useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { CardCircular, Icon, Modal, Button } from "../../../components";
import { IProduct } from "../../../interfaces";
import { EmptyObject } from "../../../helpers";
import useUser from "../../../hooks/useUser";
import CounterCartContext from "../../../context/CounterCart";
import CartGif from "../../../public/assets/shopping-cart.gif"
import { IProductComponent } from "../../../interfaces/helpers/products";
import addProductToCart from "../../../services/cart/addToCart";

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
  cursor: pointer;
`;
const ButtonC = styled.div`
  width: 200px;
`;
const Product: FC<IProductComponent> = ({ product, setInCart }) => {
  const { image, category, id, name, price, type } = product;
  const [isFavorite, setIsFavorite] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const { user } = useUser();

  const handleCart = () => {
    if (EmptyObject(user)) {
      return setModal(true);
    } else {
      setModal2(true);
    }
  };

  const handleWishList = () => {
    if (EmptyObject(user)) {
      return setModal(true);
    } else {
      setIsFavorite(true);
      alert("Producto agregado a los favoritos con exito");
    }
  };

  const handleConfirmCart = async (product: IProduct) => {
    const result = await addProductToCart({
      product_id: product.id
    })

    if (result?.status === 201 || result?.status === 200) {
      alert("Producto agregado al carrito con exito");
    } else {
      alert("Error al agregar el producto al carrito");
    }
    setModal2(false);
  };

  return (
    <ProductContainer>
      <div onClick={handleCart}>
        <CardCircular bg="#F6D1BC" size="33px" top="10px" left="78%">
          <Icon fill="fa-solid fa-cart-shopping" margin="0px" size="14px" />
        </CardCircular>
      </div>
      <div onClick={handleWishList}>
        <CardCircular bg="#b8b6b6" size="33px" top="50px" left="78%">
          {isFavorite ? (
            <Icon
              fill="fa-solid fa-star"
              margin="0px"
              size="14px"
              color="#fdfd96"
              hover="none"
            />
          ) : (
            <Icon
              fill="fa-regular fa-star"
              margin="0px"
              size="14px"
              color="#606060"
              hover="none"
            />
          )}
        </CardCircular>
      </div>
      <ImageContainer>
        <Image src={image} width="210px" height="232px" alt="Product image" />
      </ImageContainer>
      <InfoContent>
        <Text size="11px" bold={700} aling="end">
          {" "}
          ${price} COP
        </Text>
        <Link href={`/productos/${category}/${id}`}>
          <Text size="16px" bold={500}>
            {name}
          </Text>
        </Link>
      </InfoContent>
      <Modal status={modal} setStatus={setModal}>
        <Image src={CartGif} width="60px" height="50px" alt="Cart Gif" />
        <p>Para agregar productos al carrito necesita iniciar sesión</p>
      </Modal>
      <Modal status={modal2} setStatus={setModal2}>
        <Image src={CartGif} width="60px" height="50px" alt="Cart Gif" />
        <p>
          ¿Desea agregar el producto <strong>{name?.toLocaleLowerCase()}</strong>{" "}
          al carrito?
        </p>
        <ButtonC
          onClick={() =>
            handleConfirmCart({
              id,
              name,
              image,
              price,
              category,
              type
            })
          }
        >
          <Button
            text="Confirmar"
            bg="#f6d1bc"
            hover="rgba(246, 209, 188, 0.637)"
            mt="20px"
          />
        </ButtonC>
      </Modal>
    </ProductContainer>
  );
};
export default Product;
