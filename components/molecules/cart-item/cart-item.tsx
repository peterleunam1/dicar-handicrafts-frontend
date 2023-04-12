import { FC, useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Counter, Icon, Item, Modal, Button } from "../../../components";
import { CartItemProps, CounterProps, IProduct } from "../../../interfaces";
import { toCapitalize } from "../../../helpers";
import ContextCart from "../../../context/CartContext";
import useCart from "../../../hooks/useCart";

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
  span{
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
const ImageC = styled.figure`
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
  @media (max-width: 500px){
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
    &:first-of-type{
      margin-top: 10px;
    }
  }
`;

const CartItem: FC<CartItemProps> = ({ item, mode }) => {
  const { image, category, price, id, name, type, qty_in_stock } = item;
  let {quantity} = item;
  const {inCart, setUpdate, update, setQty, qty} = useCart()
  const [modal, setModal] = useState(false);
  const [counter, setCounter] = useState(1);
  const [priceWithCounter, setPriceWithCounter] = useState(0);


  useEffect(() => {
      setPriceWithCounter(price! * counter);    
  }, [counter, price]);

 const handleRemove = async () => {
    setModal(true);
  };
  const handleConfirmDelete = (product: IProduct)  => {
    const newCart = inCart?.filter (item => item.id !== product.id) 
    localStorage.setItem("cartDicar", JSON.stringify(newCart));
    setUpdate(!update)
    setModal(false);
  };
  useEffect(() => {
    const newProductWithQty = inCart?.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: counter };
      }
      return item;
    });
    localStorage.setItem("cartDicar", JSON.stringify(newProductWithQty));
    setQty(!qty)
  }, [counter, inCart])
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
                <Counter counter={counter} setCounter={setCounter}/>
              </Numbers>
            </SubContainer>
          </ContentRigth>
          <ContentLeft>
            <span><Counter  counter={counter} setCounter={setCounter} /></span>
            <Prices border="1.5px solid #e8e8e8;" margin="20px">
              
                <strong>Precio unitario:</strong> <p> ${item.price}</p>
              
            </Prices>
            <Prices>
              {" "}
              <strong>Precio:</strong> <h3>{priceWithCounter}</h3>
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
          handleConfirmDelete(item)
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
