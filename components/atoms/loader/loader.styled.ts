import styled, { keyframes } from "styled-components";

export const animation = keyframes`
  0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }
`;

export const Overlay = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  height: 42vh;
`;

export const LoaderStyled = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  display: inline-block;
  overflow: hidden;
`;

export const Inside = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;

  div {
    position: absolute;
    width: 1.875rem;
    height: 1.875rem;
    border: .3125rem solid #f6d1bc;
    border-top-color: transparent;
    border-radius: 50%;

    animation: ${animation} 1s linear infinite;
    top: 1.875rem;
    left: 1.875rem;
    box-sizing: content-box;
  }
`;
