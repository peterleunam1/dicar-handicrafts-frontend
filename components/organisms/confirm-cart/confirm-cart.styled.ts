import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: .9375rem;
  width: 100%;
  gap: 2.5rem;
`;
export const Texts = styled.span`
  max-width: 17.5rem;
  strong {
    font-size: 0.9rem;
  }
`;
export const Sizetext = styled.p`
  margin: .75rem 0 .5rem 0;
`;
