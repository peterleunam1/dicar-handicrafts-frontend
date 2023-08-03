import styled from "styled-components";

export const ProducListStyled = styled.section`
  margin: 1.375rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.875rem;
  @media (max-width: 31.25rem) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: .625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
