import { FC } from "react";
import styled from "styled-components";
import { AuthBoxProps } from "../../../interfaces";
import { Icon } from "../../../components";
import Logo from "../../atoms/logo/logo";

const Box = styled.div <{box_display: string}>`
  height: 470px;
  width: 410px;
  background: ${({ theme }) => theme.background};
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 30px 30px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.18), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: ${(props) => props.box_display};
;
`;
const HeaderContainer = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ArrowContainer = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 92%;
  left: 0;
`;
const IconArrow = styled.span<{display:string, top:string, left:string}>`
  position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    display: ${(props) => props.display};  
`;
const AuthBox: FC<AuthBoxProps> = ({
  arrow_a,
  children,
  title,
  arrow_s,
  onClick,
  box_display
}) => {
  return (
    <Box box_display={box_display || "block"}>
      <HeaderContainer>
        <Logo />
        <h2>{title}</h2>
      </HeaderContainer>
      {children}
      <ArrowContainer>
      <IconArrow onClick={onClick} top="0px" left="30px" display={arrow_a || "none"}>
      <Icon fill="fa-solid fa-arrow-left" margin="0px"/>
        </IconArrow>
        <IconArrow onClick={onClick} top="0px" left="360px" display={arrow_s || "none"}>
          <Icon fill="fa-solid fa-arrow-right" margin="0px"/>
        </IconArrow>
      </ArrowContainer>
    </Box>
  );
};
export default AuthBox;
