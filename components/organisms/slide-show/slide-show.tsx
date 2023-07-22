import { FC } from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import { SlideShowProps } from "../../../interfaces";
import "react-slideshow-image/dist/styles.css";

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  background-size: contain;
  background-position: center;
  height: 400px;
  width: 100%;
  border-radius: 10px;
`;
const ImageContainer = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  width: 100%;
  border-radius: 10px;
`;

const SlideShow: FC<SlideShowProps> = ({ images }) => {
  return (
    <Slide duration={3000} easing="ease" indicators arrows={false}>
      {images.map(({ url }, index) => (
        <SlideContainer key={index}>
          <ImageContainer img={url}></ImageContainer>
        </SlideContainer>
      ))}
    </Slide>
  );
};
export default SlideShow;
