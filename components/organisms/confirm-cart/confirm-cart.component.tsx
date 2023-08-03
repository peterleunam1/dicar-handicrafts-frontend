import Image from "next/image";
import CartGif from "../../../public/assets/shopping-cart.gif";
import { textToHandleCart } from "../../../constants";
import { FC, useState } from "react";
import styled from "styled-components";
import { convertPrice } from "../../../helpers/convert-price";
import ListOfSizes from "../../molecules/list-of-sizes/list-of-sizes.component";
import Button from "../../atoms/button/button.component";
import { findItem } from "../../../helpers";
import { useCart } from "../../../hooks/useCart";
import { IProduct } from "../../../interfaces";

interface ConfirmCartProps {
  product: IProduct;
  toggle: () => void;
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 15px;
  width: 100%;
  gap: 40px;
`;
const Texts = styled.span`
  max-width: 280px;
  strong {
    font-size: 0.9rem;
  }
`;
const Sizetext = styled.p`
  margin: 12px 0 8px 0;
`;
const SizeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
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
          <Image src={CartGif} width="60px" height="50px" alt="Cart Gif" />
          <Content>
            <picture>
              <Image
                src={product.image}
                width="120px"
                height="140px"
                alt={product.name}
                style={{ borderRadius: "5px" }}
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
        mt="20px"
        width="200px"
        onClick={() => {
          handleAddToCart();
          toggle();
        }}
      />
    </>
  );
};
export default ConfirmCart;
