import { FC } from "react";
import styled from "styled-components";
import { SummaryProps } from "../../../interfaces";

const Card = styled.article`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 20px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  h3{
    margin-bottom: 15px;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Summary: FC<SummaryProps> = ({ children }) => {
  return (
    <Card>
      <h3>Resumen</h3>
      <Content>{children}</Content>
    </Card>
  );
};
export default Summary;
