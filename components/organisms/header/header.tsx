import { FC, useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Icon, SocialBar, NavBar, NavLateral, Logo } from "../../../components";
import ContextTheme from "../../../context/ThemeContextUI";
import LogoWhite from "../../../public/assets/logo-white.png";
import LogoBlack from "../../../public/assets/logo-black.png";

const HeaderStyled = styled.header`
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
const OptionsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <HeaderStyled>
      <OptionsLeft>
        <span onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <Icon fill="fa-solid fa-bars" margin="0px" />
        </span>
        <SocialBar />
        {isOpenMenu ? (
          <NavLateral transform="translateX(0px)" setIsOpen={setIsOpenMenu}/>
        ) : (
          <NavLateral transform="translateX(-350px)" setIsOpen={setIsOpenMenu}/>
        )}
      </OptionsLeft>
      <Logo route="/" />
      <NavBar />
    </HeaderStyled>
  );
};
export default Header;
