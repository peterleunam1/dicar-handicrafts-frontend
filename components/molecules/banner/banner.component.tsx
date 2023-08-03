import { FC } from "react";
import { BannerProps } from "../../../interfaces";
import { BannerContainer, Title } from "./banner.styled";


const Banner: FC<BannerProps> = ({ title, image }) => {
  return (
    <BannerContainer img={image}>
      <Title>{title.toUpperCase()}</Title>
    </BannerContainer>
  );
};
export default Banner;
