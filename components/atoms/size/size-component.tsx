import { FC, useState } from "react";
import styled from "styled-components";
interface SizeProps {
  size: string;
  isActived: boolean;
  onClick: () => void;
}
const SizeStyled = styled.button<{ isActived: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #cececec3;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 15px;
  font-size: .9rem;
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
const Size: FC<SizeProps> = ({ size, onClick,  isActived}) => {
  const handleSize = () => {
    onClick();
  };
  return (
    <SizeStyled onClick={handleSize} isActived={isActived || false}>
      {size}
    </SizeStyled>
  
  );
};
export default Size;
