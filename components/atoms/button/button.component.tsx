import { FC } from "react";
import styled from "styled-components";
import { ButtonProps } from "../../../interfaces";

const ButtonStyled = styled.button<{
  bg: string;
  hover: string;
  color?: string;
  border?: string;
  mb?: string;
  mt?: string;
  width?: string;
}>`
  width: ${(props) => props.width || "100%"};
  height: 34px;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border || "none"};
  border-radius: 7px;
  padding: 5px 7px;
  cursor: pointer;
  margin-top: ${(props) => props.mt || "0px"};
  margin-bottom: ${(props) => props.mb || "0px"};

  p {
    color: ${(props) => props.color || "#606060"};
    margin: 0;
    padding: 0;
  }
  &:hover {
    background-color: ${(props) => props.hover};
  }
`;

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
  children
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
