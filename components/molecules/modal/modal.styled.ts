import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.section<{ width?: string; height?: string }>`
  min-width: ${(props) => props.width || "30%"};
  min-height: ${(props) => props.height || "30vh"};
  background: #fff;
  position: relative;
  border-radius: .9375rem;
  box-shadow: rgba(100, 100, 111, 0.15) 0 .4375rem 1.8125rem 0;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: .0313rem solid #000;
  padding: 1.875rem 1.875rem;
  @media (max-width: 31.25rem) {
    width: 80%;
  }
`;

export const Close = styled.article`
  position: absolute;
  top: .625rem;
  right: .625rem;
  width: 2.1875rem;
  height: 2.1875rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
