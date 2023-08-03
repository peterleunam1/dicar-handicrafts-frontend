import { FC } from "react";
import styled from "styled-components";
import { TitleChildrenProps } from "../../../interfaces";
import { toCapitalize } from "../../../utils";

const Paragraph = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const TitleChildren: FC<TitleChildrenProps> = ({ title, children }) => {
  return (
    <Paragraph>
      <strong>{toCapitalize(title)}:</strong>
      <span>{children}</span>
    </Paragraph>
  );
};
export default TitleChildren;
