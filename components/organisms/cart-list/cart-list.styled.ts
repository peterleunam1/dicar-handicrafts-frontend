import styled from "styled-components";

export const HeaderList = styled.header`
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: .0938rem solid #e8e8e8;
  @media (max-width: 31.25rem) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: auto;
    padding-bottom: .625rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  @media (max-width: 31.25rem) {
    width: 100%;
  }
  strong {
    text-transform: uppercase;
    font-size: .9375rem;
    @media (max-width: 31.25rem) {
      font-size: .875rem;
    }
  }
  p {
    text-transform: uppercase;
    font-size: 700;
    font-size: .8125rem;
  }
`;

export const ButtonContainer = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "25%"};
  display: flex;
  justify-content: flex-start;

  @media (max-width: 31.25rem) {
    width: 50%;
    margin-top: .625rem;
  }

  ${(props) =>
    props.width === "25%" &&
    `
    @media (max-width: 31.25rem) {
      display: none;
    }
  `}
`;
