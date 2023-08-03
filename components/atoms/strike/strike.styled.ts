import styled from "styled-components";

export const StrikeText = styled.span`
  position: relative;
  width: max-content;
  padding: 0 .5rem;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: .0625rem;
    background-color: #000;
    border-radius: .3125rem;
  }
`;
