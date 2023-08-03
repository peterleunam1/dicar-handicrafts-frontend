import Image from "next/image";
import CartGif from "../../../public/assets/shopping-cart.gif";
import { textToHandleCart } from "../../../constants";
import { FC, useState } from "react";
import { convertPrice } from "../../../utils/convert-price.util";
import { findItem } from "../../../utils";
import { useCart } from "../../../hooks";
import { ConfirmCartProps } from "../../../interfaces";
import { Button, ListOfSizes } from "../../../components";
import { Container, Content, Sizetext, Texts } from "./confirm-cart.styled";

const ConfirmCart: FC<ConfirmCartProps> = ({ product, toggle }) => {
  
  const texts = textToHandleCart(product.name);
  const { cart, addToCart } = useCart();
  const isAdded = findItem({ id: product.id, items: cart });
  const [sizeSelected, setSizeSelected] = useState<string>("");

  const handleAddToCart = () => {
    if (isAdded) {
      addToCart({ ...product });
    } else if (sizeSelected) {
      addToCart({ ...product, size: sizeSelected });
    } else {
      alert("Debes seleccionar una talla");
    }
  };

  return (
    <>
      {isAdded ? (
        <p>{texts.updateQuantity}</p>
      ) : (
        <Container>
          <Image src={CartGif} width="3.75rem" height="3.125rem" alt="Cart Gif" />
          <Content>
            <picture>
              <Image
                src={product.image}
                width="7.5rem"
                height="8.75rem"
                alt={product.name}
                style={{ borderRadius: ".3125rem" }}
              />
            </picture>
            <Texts>
              <p>{texts.add}</p>
              <strong>{convertPrice(product.price)}</strong>
              <Sizetext>Seleccione una talla: </Sizetext>
              <ListOfSizes
                setSizeSelect={setSizeSelected}
                category={product.category}
                sizeSelected={sizeSelected}
              />
            </Texts>
          </Content>
        </Container>
      )}
      <Button
        text="Confirmar"
        bg="#f6d1bc"
        hover="rgba(246, 209, 188, 0.637)"
        mt="1.25rem"
        width="12.5rem"
        onClick={() => {
          handleAddToCart();
          toggle();
        }}
      />
    </>
  );
};
export default ConfirmCart;
