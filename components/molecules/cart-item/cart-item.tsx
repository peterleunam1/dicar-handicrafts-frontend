import { FC, useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Counter, Icon, Item, Modal, Button } from "../../../components";
import { CartItemProps, CounterProps, IProduct } from "../../../interfaces";
import { toCapitalize } from "../../../helpers";
import deleteItemFromCart from "../../../services/cart/deleteItemFromCart";
import ContextCart from "../../../context/CartContext";

const ListItem = styled.article`
  width: calc(100%-20px);
  display: flex;
  padding: 20px 0px 30px 20px;
  border-bottom: 1.5px solid #e8e8e8;
  align-items: flex-start;
  justify-content: center;
`;
const ContentRigth = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  strong {
    font-weight: 550;
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
`;
const ImageC = styled.figure`
  width: 100px;
  height: 120px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 0px;
  margin-left: 0px;
  margin-top: 12px;
`;
const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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
const ButtonC = styled.div`
  width: 200px;
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
`;

const CartItem: FC<CartItemProps> = ({ item, mode }) => {
  const [qty, setQty] = useState(1);
  const { image, category, price, id, name, type, qty_in_stock, qty:quantity} = item;
  const { setUpdate } = useContext(ContextCart);
  const [modal, setModal] = useState(false);


  function handleAdd(qty: number) {
    if (qty === 0) handleRemove();
    setQty(() => qty);
  }

  const handleRemove = async () => {
    setModal(true);
  };

  return (
    <>
      {mode === "complete" ? (
        <ListItem>
          <ContentRigth>
            <Link href={`productos/${category}/${id}`}>
              <ImageC>
                <Image
                  src={image}
                  width="100px"
                  height="120px"
                  layout="responsive"
                  alt="Product Image"
                />
              </ImageC>
            </Link>
            <SubContainer>
              <Info>
                <strong>{name}</strong>
                <Description>{`${toCapitalize(
                  type || ""
                )} elaborad@ 100% de manera artesanal`}</Description>
                <Text>
                  Vendido y entragado por <Strong>Dicar.</Strong>
                </Text>
                <span>
                  <Links>
                    <Icon
                      fill="fa-regular fa-heart"
                      margin="0px"
                      mr="8px"
                      color="#ff6242"
                    />{" "}
                    Agregar a favoritos
                  </Links>
                  |{" "}
                  <Links onClick={handleRemove}>
                    <Icon
                      fill="fa-solid fa-xmark"
                      margin="0px"
                      mr="8px"
                      color="#000"
                    />
                    Eliminar
                  </Links>
                </span>
              </Info>
              <Numbers>
                <p>
                  <strong>Estado: </strong>
                  {qty_in_stock === 0 ? "Agotado" : "Disponible"}
                </p>
                <p>
                  <strong>Categoria: </strong>
                  {` ${toCapitalize(category || "")}`}
                </p>
                <Counter id={item?.id} onAction={handleAdd} qty={quantity}/>
              </Numbers>
            </SubContainer>
          </ContentRigth>
          <ContentLeft>
            <Prices border="1.5px solid #e8e8e8;" margin="20px">
              <p>
                <strong>Precio unitario:</strong> ${item.price}
              </p>
            </Prices>
            <Prices>
              {" "}
              <strong>Precio:</strong> <h3>{`$${price! * qty}`}</h3>
            </Prices>
          </ContentLeft>
        </ListItem>
      ) : (
        <Item item={item} qt={quantity}></Item>
      )}
      <Modal status={modal} setStatus={setModal}>
        <p>¿Estás seguro que deseas eliminar este producto?</p>
        <ButtonC
          onClick={() =>
            deleteItemFromCart({
              product_id: id,
            }).then(() => {
              setUpdate(true);
              setModal(false);
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
    </>
  );
};
export default CartItem;
