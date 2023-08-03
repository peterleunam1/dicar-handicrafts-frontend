import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: .625rem;
`;
export const Images = styled.figure`
  width: 3.4375rem;
  height: 4.0625rem;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 9vh;
  width: 67%;
  padding-left: 1.125rem;
`;
export const Title = styled.strong`
  font-size: .875rem;
  font-weight: 500;
  width: 12.5rem;
`;
export const Price = styled.p`
  font-size: .8125rem;
  margin-top: .1875rem;
`;
export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 9vh;
  width: 15%;
`;
