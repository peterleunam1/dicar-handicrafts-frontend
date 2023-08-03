import { FC } from "react";
import { TitleChildrenProps } from "../../../interfaces";
import { toCapitalize } from "../../../utils";
import { Paragraph } from "./title-children.styled";

const TitleChildren: FC<TitleChildrenProps> = ({ title, children }) => {
  return (
    <Paragraph>
      <strong>{toCapitalize(title)}:</strong>
      <span>{children}</span>
    </Paragraph>
  );
};
export default TitleChildren;
