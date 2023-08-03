import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .1875rem 2.5% .1875rem 2.5%;
  box-shadow: ${({ theme }) => theme.bshadow};
  position: fixed;
  top: 0;
  left: 0%;
  width: 95%;
  z-index: 10;
  background-color: ${({ theme }) => theme.background};
`;
