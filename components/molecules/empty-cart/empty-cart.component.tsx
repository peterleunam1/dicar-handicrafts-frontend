import { FC } from "react"
import Image from "next/image";
import CartEmpty from "../../../public/assets/cart.png";
import styled from "styled-components";
import { cart } from "../../../constants";


const Container = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 64px;
  height: 64px;
`;
const Info = styled.div`
width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  h2{
    text-align: center;
  }
`;
const EmptyCart: FC = () => {
    return (
        <Container>
        <ImageContainer>
          <Image
            src={CartEmpty}
            width="64px"
            height="64px"
            layout="responsive"
            alt="empty-cart"
          />
        </ImageContainer>
        <Info>
            <h2>{cart.empty}</h2>
        </Info>
      </Container>
    )
  }
  export default EmptyCart