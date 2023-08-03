import styled from "styled-components";

export const ButtonStyled = styled.button<{
  bg: string;
  hover: string;
  color?: string;
  border?: string;
  mb?: string;
  mt?: string;
  width?: string;
}>`
  width: ${(props) => props.width || "100%"};
  height: 2.125rem;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border || "none"};
  border-radius: .4375rem;
  padding: .3125rem .4375rem;
  cursor: pointer;
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};

  p {
    color: ${(props) => props.color || "#606060"};
    margin: 0;
    padding: 0;
  }
  &:hover {
    background-color: ${(props) => props.hover};
  }
`;
