import styled from "styled-components";

export const ProductContainer = styled.article<{ show: string }>`
  width: max-content;
  height: auto;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    border-radius: .3125rem;
    background-color: rgba(0, 0, 0, 0.25);
    visibility: ${(props) => props.show};
    @media (max-width: 31.25rem) {
      visibility: visible;
    }
  }

  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;
export const ImageContainer = styled.div`
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: .3125rem;
`;
export const Title = styled.h2<{ transform: string }>`
  position: absolute;
  top: 82%;
  left: 20%;
  text-align: center;
  transform: ${(props) => props.transform};
  transition: 0.7s ease transform;
  color: #ffff;
  z-index: 1;
  @media (max-width: 31.25rem) {
    transform: translateY(0);
    bottom: 5%;
    left: 0;
    width: 100%;
    font-size: 1.2rem;
  }
`;
