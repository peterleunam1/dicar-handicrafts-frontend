import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
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
import { toCapitalize } from "../../../utils";
import { convertPrice } from "../../../utils/convert-price.util";
import { cart, textToHandleCart } from "../../../constants";
import { useCart, useModal } from "../../../hooks";

const ListItem = styled.article`
  width: calc(100%-20px);
  display: flex;
  padding: 20px 0px 30px 20px;
  border-bottom: 1.5px solid #e8e8e8;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 0px 50px 0px;
  }
`;
const ContentRigth = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  strong {
    font-weight: 550;
    @media (max-width: 500px) {
      color: #f6d1bc;
    }
  }
  @media (max-width: 500px) {
    width: 92%;
    margin-bottom: 20px;
    background-color: ${(props) => props.theme.card};
    padding: 15px;
    border-radius: 10px;
  }
`;
const ContentLeft = styled.div`
  width: 25%;
  height: 80px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: none;
    @media (max-width: 500px) {
      display: block;
      margin: 0 auto;
      display: flex;
      gap: 8px;
      margin-left: 25%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0px;
  }
`;
const ImageContainer = styled.figure`
  width: 100px;
  height: 120px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 0px;
  margin-left: 0px;
  margin-top: 12px;
  @media (max-width: 500px) {
    width: 80px;
    height: 100px;
  }
`;
const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 25px;
  span {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
  }
`;

const Description = styled.p`
  font-size: 13px;
  margin-top: 5px;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Links = styled.p`
  font-size: 13px;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease font-weight;
  color: #606060;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
const Text = styled.p`
  font-size: 11px;
  font-weight: 500;
  margin: 12px 0px;
`;
const Strong = styled.strong`
  color: #f6d1bc;
  font-weight: bolder;
`;
const Numbers = styled.div`
  width: 30%;
  height: 80px;
  padding: 50px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-right: 1.5px solid #e8e8e8;

  p {
    font-size: 14px;
  }
  strong {
    font-weight: 550;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const Prices = styled.div<{ border?: string; margin?: string }>`
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.margin || "0px"};
  border-bottom: ${(props) => props.border || "none"};
  strong {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    &:first-of-type {
      margin-top: 10px;
    }
  }
`;

const CartItem: FC<CartItemProps> = ({ item, mode }) => {
  const { image, category, price, id, name, type, qty_in_stock, quantity, size } =
    item;
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
                  width="100px"
                  height="120px"
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
                    margin="0px"
                    mr="8px"
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
            <Prices border="1.5px solid #e8e8e8;" margin="20px">
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
          mt="20px"
          width="200px"
          onClick={() => handleRemoveItem(id)}
        />
      </Modal>
    </>
  );
};
export default CartItem;
