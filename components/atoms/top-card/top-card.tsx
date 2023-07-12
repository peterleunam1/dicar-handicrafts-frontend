import { FC } from "react";
import styled from "styled-components";
import { TopCardProps } from "../../../interfaces";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 2.5% 3px 2.5%;
  box-shadow: ${({ theme }) => theme.bshadow};
  position: fixed;
  top: 0;
  left: 0%;
  width: 95%;
  z-index: 10;
  background-color: ${({ theme }) => theme.background};
`;

const TopCard: FC<TopCardProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
export default TopCard;
