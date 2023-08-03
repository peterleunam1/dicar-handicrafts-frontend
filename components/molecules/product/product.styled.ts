import styled from "styled-components";

export const ProductContainer = styled.article`
  width: max-content;
  height: auto;
  position: relative;
  max-width: 13.125rem;
  p {
    text-align: center;
    margin-top: 1.25rem;
  }
`;

export const ImageContainer = styled.div`
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: .3125rem;
  cursor: pointer;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 14.5rem;
      background-color: rgba(0, 0, 0, 0.05);
      z-index: 1;
    }
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const Text = styled.div<{ size: string; bold: number; aling?: string }>`
  font-weight: ${(props) => props.bold};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.aling || "center"};
  width: 100%;
`;