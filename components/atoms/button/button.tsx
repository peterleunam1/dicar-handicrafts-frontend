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
}>`
  width: 100%;
  height: 34px;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: 7px;
  padding: 5px 7px;
  cursor: pointer;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  
  p {
    color: ${(props) => props.color};
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
  mt
}) => {
  return (
    <ButtonStyled
      bg={bg}
      hover={hover}
      color={color || "#606060"}
      border={border || "none"}
      mt={mt || "0px"}
      mb={mb || "0px"}
    >
      <p>{text}</p>
    </ButtonStyled>
  );
};
export default Button;
