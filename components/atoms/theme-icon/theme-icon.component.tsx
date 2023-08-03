import { FC } from "react";
import { ThemeIconsProps } from "../../../interfaces";
import { Container } from "./theme-icon.styled";

const ThemeIcon: FC<ThemeIconsProps> = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default ThemeIcon;
