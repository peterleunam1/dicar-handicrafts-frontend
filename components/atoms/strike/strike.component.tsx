import { FC } from "react";
import styled from "styled-components";
import { StrikeProps } from "../../../interfaces";

const StrikeText = styled.span`
  position: relative;
  width: max-content;
  padding: 0px 8px;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background-color: #000;
    border-radius: 5px;
  }
`;

const Strike: FC<StrikeProps> = ({ children }) => {
  return <StrikeText>{children}</StrikeText>;
};
export default Strike;
