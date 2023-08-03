import { FC } from "react";
import { ButtonProps } from "../../../interfaces";
import { ButtonStyled } from "./button.styled";

const Button: FC<ButtonProps> = ({
  bg,
  hover,
  text,
  color,
  border,
  mb,
  mt,
  width,
  onClick,
  children,
}) => {
  return (
    <ButtonStyled
      bg={bg}
      hover={hover}
      color={color}
      border={border}
      mt={mt}
      mb={mb}
      width={width}
      onClick={onClick}
    >
      <p>{text}</p>
      {children}
    </ButtonStyled>
  );
};
export default Button;
