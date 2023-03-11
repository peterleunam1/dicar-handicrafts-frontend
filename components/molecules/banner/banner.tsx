import { FC } from "react";
import styled from "styled-components";
import { BannerProps } from "../../../interfaces";

const BannerContainer = styled.section<{ img: string }>`
  width: 100%;
  height: 200px;
  position: relative;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.4);

  }
`;
const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  z-index: 2;

  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

const Banner: FC<BannerProps> = ({ title, image }) => {
  return (
    <>
      <BannerContainer img={image}>
        <Title>{title.toUpperCase()}</Title>
      </BannerContainer>
    </>
  )
}
export default Banner