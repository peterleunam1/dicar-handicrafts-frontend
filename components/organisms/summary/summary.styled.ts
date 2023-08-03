import styled from "styled-components";

export const Card = styled.article`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.25rem 1.25rem 1.25rem;
  background-color: #fff;
  border-radius: 0.625rem;
  box-shadow: 0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.1),
    0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.1);
  h3 {
    margin-bottom: .9375rem;
  }
  @media (max-width: 31.25rem) {
    width: 88%;
    margin-top: 1.25rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubTotal = styled.div`
  width: 100%;
  margin: 0.625rem 0;
  border-top: 0.125rem solid #e8e8e8;
  border-bottom: 0.125rem solid #e8e8e8;
  padding: 0.625rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: bold;
  p {
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:first-of-type {
      margin-bottom: 0.3125rem;
    }
  }
`;

export const Total = styled.p`
  color: #d32f2f;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bolder;
`;
