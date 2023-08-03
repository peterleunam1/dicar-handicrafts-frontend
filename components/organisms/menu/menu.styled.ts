import styled from "styled-components";

export const MenuStyled = styled.section`
  width: 95%;
  margin: 2.1875rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  @media (max-width: 31.25rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: .9375rem;
    width: 100%;
    margin: 0 auto;
  }
`;