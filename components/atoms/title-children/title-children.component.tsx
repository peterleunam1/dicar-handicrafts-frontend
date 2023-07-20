import { FC } from "react";
import styled from "styled-components";
import { TitleChildrenProps } from "../../../interfaces";
import { toCapitalize } from "../../../helpers";

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
      <div>{children}</div>
    </Paragraph>
  );
};
export default TitleChildren;
