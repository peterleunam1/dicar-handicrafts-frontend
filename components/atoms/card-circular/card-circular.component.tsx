import { FC } from "react";
import styled from "styled-components";
import { CardCircularProps } from "../../../interfaces";

const CardStyled = styled.div<{
  width: string;
  height: string;
  top?: string;
  left?: string;
}>`
  border-radius: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #f6d1bc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 2;
  cursor: pointer;
`;

const CardCircular: FC<CardCircularProps> = ({
  size,
  children,
  top,
  left,
}) => {
  return (
    <CardStyled
      width={size || "10px"}
      height={size || "10px"}
      top={top || "0"}
      left={left || "0"}
    >
      {children}
    </CardStyled>
  );
};
export default CardCircular;
