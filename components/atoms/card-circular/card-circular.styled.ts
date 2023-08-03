import styled from "styled-components";

export const CardStyled = styled.div<{
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
