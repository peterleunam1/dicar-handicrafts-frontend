import { FC } from "react";
import { CardCircularProps } from "../../../interfaces";
import { CardStyled } from "./card-circular.styled";

const CardCircular: FC<CardCircularProps> = ({ size, children, top, left }) => {
  return (
    <CardStyled
      width={size || ".625rem"}
      height={size || ".625rem"}
      top={top || "0"}
      left={left || "0"}
    >
      {children}
    </CardStyled>
  );
};
export default CardCircular;
