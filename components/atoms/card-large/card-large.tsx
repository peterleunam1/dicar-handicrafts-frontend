import { FC } from "react";
import styled from "styled-components";
import { CardLargeProps } from "../../../interfaces";
const Container = styled.article<{ height: string; width: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.5s ease transform;
  cursor: pointer;
  border-left: 10px solid #e8e8e8;
  margin-bottom: 20px;
;
  &:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.13);
    transform: translateY(-2%);
  }
`;
const CardLarge: FC<CardLargeProps> = ({ children, height, width }) => {
  return (
    <Container height={height} width={width}>
      {children}
    </Container>
  );
};
export default CardLarge;
