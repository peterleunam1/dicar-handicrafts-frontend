import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { IconProps } from "../../../interfaces";

const IconStyled = styled.i<{
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
    transition:.5s ease color ;
  }
`;
const Icon: FC<IconProps> = ({ fill, size, color, margin, mr, hover }) => {
  return (
        <IconStyled
        mr={mr||"0px"}
          margin={margin || "15px"}
          className={fill}
          size={size || "18px"}
          color={color || "#606060"}
          hover={hover || "#000"}
        ></IconStyled>
  );
};
export default Icon;
