import { FC } from "react";
import { TopCardProps } from "../../../interfaces";
import { Container } from "./top-card.styled";

const TopCard: FC<TopCardProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
export default TopCard;
