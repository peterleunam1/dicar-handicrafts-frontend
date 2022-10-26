import { FC } from "react";
import styled from "styled-components";
import { ButtonProps } from "../../../interfaces";

const ButtonStyled = styled.button<{ bg: string; hover: string }>`
  width: 100%;
  background-color: ${(props) => props.bg};
  border: none;
  border-radius: 10px;
  padding: 5px 7px;
  cursor: pointer;

  p{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #606060;
  }
  &:hover {
    background-color: ${(props) => props.hover};
  }
`;
const Button: FC<ButtonProps> = ({bg, hover, text }) => {
  return (
    <ButtonStyled bg={bg} hover={hover}>
      <p>{text}</p>
    </ButtonStyled>
  );
};
export default Button;
