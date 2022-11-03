import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Counter, Icon } from "../../../components";
import { IProduct } from "../../../interfaces";

const ListItem = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fdfdfd;
  margin-bottom: 8px;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 10px;

  p {
    margin-bottom: 10px;
    font-weight: 500;
  }
  strong{
    color: #f6d1bc;
    cursor: pointer;
  }
`;
const ContentRigth = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
`;
const ContentLeft = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0;
  height: auto;
  padding-right: 25px;
  height: 14vh;
`;
const ImageC = styled.figure`
  width: 80px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 0px;
  margin-left: 0px;
  overflow: hidden;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 20px;
`;


const CartItem: FC<IProduct> = ({ category, image, name, price, id }) => {
  const [qty, setQty] = useState(1);

  function handleAdd(event: number) {
    setQty(() => event);
  }
  return (
    <ListItem>
      <ContentRigth>
        <Link href={`productos/${category}/${id}`}>
          <ImageC>
            <Image
              src={image}
              width="80px"
              height="100px"
              layout="responsive"
              radioGroup="5px"
            />
          </ImageC>
        </Link>
        <Info>
          <p>{name}</p>
          <Counter onAction={handleAdd} />
        </Info>
      </ContentRigth>
      <ContentLeft>
        
        <h3>{`$${price * qty}.000`}</h3>
        <strong>Remover</strong>      
      </ContentLeft>
    </ListItem>
  );
};
export default CartItem;
