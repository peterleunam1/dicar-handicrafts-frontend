import { FC } from "react";
import { StrikeProps } from "../../../interfaces";
import { StrikeText } from "./strike.styled";

const Strike: FC<StrikeProps> = ({ children }) => {
  return <StrikeText>{children}</StrikeText>;
};
export default Strike;
