import { FC } from "react";
import { IconProps } from "../../../interfaces";
import { IconStyled } from "./icon.styled";

const Icon: FC<IconProps> = ({ fill, size, color, margin, mr, hover }) => {
  return (
    <IconStyled
      mr={mr || "0"}
      margin={margin || ".9375rem"}
      className={fill}
      size={size || "1.125rem"}
      color={color || "#606060"}
      hover={hover || "#000"}
    ></IconStyled>
  );
};
export default Icon;
