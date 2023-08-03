import styled from "styled-components";

export const SizeStyled = styled.button<{ isActived: boolean }>`
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: .3125rem;
  border: .0625rem solid #cececec3;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: .9375rem;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #cececec3;
  }
  ${({ isActived }) =>
    isActived &&
    `
      background-color: #cececec3;
      font-weight: 500;
    `}
`;
