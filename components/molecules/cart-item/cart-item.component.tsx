import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Counter,
  Icon,
  Item,
  Modal,
  Button,
  DeleteItem,
  TitleChildren,
} from "../..";
import { CartItemProps } from "../../../interfaces";
import { toCapitalize, convertPrice } from "../../../utils";
import { cart, textToHandleCart } from "../../../constants";
import { useCart, useModal } from "../../../hooks";
import {
  ListItem,
  ContentRigth,
  ImageContainer,
  SubContainer,
  Info,
  Description,
  Strong,
  Numbers,
  ContentLeft,
  Prices,
  Text,
} from "./cart-item.styled";

const CartItem: FC<CartItemProps> = ({ item, mode }) => {
  const {
    image,
    category,
    price,
    id,
    name,
    type,
    quantity,
    size,
  } = item;
  const { removeItem } = useCart();
  const { status, toggle } = useModal({ initialMode: false });
  const texts = textToHandleCart(name);

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  return (
    <>
      {mode === "complete" ? (
        <ListItem>
          <ContentRigth>
            <Link href={`productos/${category}/${id}`}>
              <ImageContainer>
                <Image
                  src={image}
                  width="6.25rem"
                  height="7.5rem"
                  layout="responsive"
                  alt="Product Image"
                />
              </ImageContainer>
            </Link>
            <SubContainer>
              <Info>
                <strong>{name}</strong>
                <Description>{`${toCapitalize(
                  type
                )} elaborad@ 100% de manera artesanal`}</Description>
                <Text>
                  Vendido y entragado por <Strong>Dicar.</Strong>
                </Text>
                <DeleteItem onDelete={toggle}>
                  <Icon
                    fill="fa-solid fa-xmark"
                    margin="0"
                    mr=".5rem"
                    color="#D30000"
                  />
                </DeleteItem>
              </Info>
              <Numbers>
                <TitleChildren title="Talla">
                  {size?.toUpperCase()}
                </TitleChildren>
                <TitleChildren title="categoria">
                  {toCapitalize(category)}
                </TitleChildren>
                <Counter product={item} />
              </Numbers>
            </SubContainer>
          </ContentRigth>
          <ContentLeft>
            <span>
              <Counter product={item} />
            </span>
            <Prices border=".0938rem solid #e8e8e8;" margin="1.25rem">
              <strong>{cart.unit_price}:</strong>
              <p>{convertPrice(price)}</p>
            </Prices>
            <Prices>
              <strong>{cart.price}:</strong>
              <h3>{convertPrice(price * quantity!)}</h3>
            </Prices>
          </ContentLeft>
        </ListItem>
      ) : (
        <Item item={item}></Item>
      )}
      <Modal status={status} setStatus={toggle}>
        <p>{texts.remove}</p>
        <Button
          text="Confirmar"
          bg="#f6d1bc"
          hover="rgba(246, 209, 188, 0.637)"
          mt="1.25rem"
          width="12.5rem"
          onClick={() => handleRemoveItem(id)}
        />
      </Modal>
    </>
  );
};
export default CartItem;
