import styled from "styled-components";

export const InfoContainer = styled.aside`
  height: 28.125rem;
  width: 30%;
  height: auto;
  margin-left: 2.5rem;
  position: relative;

  @media (max-width: 31.25rem) {
    width: 100%;
    margin-left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    height: .3125rem;
    background-color: #f6d1bc;
    border-radius: .3125rem;
  }
  h2 {
    margin: .9375rem 0 .5rem 0;
  }
`;

export const SendType = styled.figure`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  margin: 1.25rem 0;
  a {
    cursor: pointer;
  }
`;
export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .625rem;
`;
export const FigCaption = styled.figcaption`
  margin-right: .625rem;
`;
export const ListSizesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5625rem;
  margin: .3125rem 0;
  flex-wrap: wrap;
`;
