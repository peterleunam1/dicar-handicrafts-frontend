import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5625rem auto 3.125rem auto;
  width: 95%;
  background-color: ${(props) => props.theme.card};
  border-radius: .625rem;
  overflow: hidden;
  span {
    @media (max-width: 31.25rem) {
      display: none;
    }
  }

  @media (max-width: 31.25rem) {
    padding: 1.25rem 0;
  }
`;

export const SubContainer = styled.div<{ width: string; sizeText: string }>`
  max-width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 31.25rem) {
    max-width: unset;
    width: 100%;
  }
  article {
    margin: .625rem 0 1.25rem 8%;
    @media (max-width: 31.25rem) {
      margin: .625rem 0;
    }
  }
  p {
    width: 82%;
    font-size: ${(props) => props.sizeText};
    text-align: center;
    width: 92%;
  }
`;

export const StrongText = styled.strong<{ size?: string }>`
  font-weight: bolder;
  color: #f6d1bc;
  font-size: ${(props) => props.size || "1.375rem"};
`;

export const Title = styled.h2`
  font-weight: bolder;
  width: 82%;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 31.25rem) {
    width: 100%;
    font-size: 1.25rem;
  }
`;
