import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { IconProps } from "../../../interfaces";

const IconStyled = styled.i<{
  size: string;
  color: string;
  margin: string;
  hover: string;
}>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin-left: ${(props) => props.margin};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.hover};
    transition:.5s ease color ;
  }
`;
const Icon: FC<IconProps> = ({ fill, size, color, margin, path, hover }) => {
  return (
    <Link href={path || ""} target="_blank">
      <a>
        <IconStyled
          margin={margin || "15px"}
          className={fill}
          size={size || "18px"}
          color={color || "#606060"}
          hover={hover || "#000"}
        ></IconStyled>
      </a>
    </Link>
  );
};
export default Icon;
