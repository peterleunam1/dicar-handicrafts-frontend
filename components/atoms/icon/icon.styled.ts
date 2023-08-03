import styled from "styled-components";

export const IconStyled = styled.i<{
  size: string;
  color: string;
  margin: string;
  mr?: string;
  hover: string;
}>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin-left: ${(props) => props.margin};
  margin-right: ${(props) => props.mr};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.hover};
    transition: 0.5s ease color;
  }
`;
