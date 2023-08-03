import styled from "styled-components";

export const BannerContainer = styled.section<{ img: string }>`
  width: 100%;
  height: 12.5rem;
  position: relative;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: .625rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: .3125rem;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3.125rem;
  font-weight: 600;
  margin: 0;
  z-index: 2;

  @media (max-width: 31.25rem) {
    font-size: 2.5rem;
  }
`;
