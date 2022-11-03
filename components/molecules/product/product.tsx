import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { CardCircular, Icon, Modal } from "../../../components";
import { IProduct } from "../../../interfaces";
import { EmptyObject } from "../../../helpers";
import useModal from "../../../hooks/useModal";
import useUser from "../../../hooks/useUser";

const ProductContainer = styled.article`
  width: max-content;
  height: auto;
  position: relative;
  max-width: 210px;
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
const Product: FC<IProduct> = ({ image, name, price, id, category }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { status, setStatus } = useModal();
  const { user } = useUser();
  const route = useRouter();

  // const handleClick = () => {
  //   console.log("mirave")
  //   if (EmptyObject(user)) {
  //     console.log("estoy vacio")
  //     return (
  //       <Modal status={status} setStatus={setStatus}>
  //         <p>Para agregar productos al carrito necesita iniciar sesión</p>
  //       </Modal>
  //     );
  //   }
  // };

  return (
    <ProductContainer>
     
        <CardCircular bg="#F6D1BC" size="33px" top="10px" left="78%">
          <Icon fill="fa-solid fa-cart-shopping" margin="0px" size="14px" />
        </CardCircular>
      
      <CardCircular bg="#fff" size="33px" top="50px" left="78%">
        <span onClick={() => setIsFavorite(!isFavorite)}>
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
        </span>
      </CardCircular>
      <ImageContainer>
        <Image src={image} width="210px" height="232px" alt="Product image" />
      </ImageContainer>
      <InfoContent>
        <Text size="11px" bold={700} aling="end">
          {" "}
          ${price}.000 COP
        </Text>
        <Link href={`/productos/${category}/${id}`}>
          <Text size="16px" bold={500}>
            {name}
          </Text>
        </Link>
      </InfoContent>
    </ProductContainer>
  );
};
export default Product;
