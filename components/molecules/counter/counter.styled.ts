import styled from "styled-components";

export const Container = styled.span`
  width: 5.3125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 380;
  }
  @media (max-width: 31.25rem) {
    margin: .875rem 0;
  }
`;
export const CircularCard = styled.div`
  width: 1.5625rem;
  height: 1.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: .0625rem solid #606060;
  border-radius: .5rem;
  cursor: pointer;
  &:hover {
    background-color: #606060;
    transition: ease 1s background-color;
  }
`;
