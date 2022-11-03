import Link from "next/link";
import { FC, useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Icon, ThemeIcon, Input, CardCircular } from "../../../components";
import ContextTheme from "../../../context/ThemeContextUI";

const NavBarStyled = styled.nav`
  display: flex;
  align-items: center;
`;
const Animate = keyframes`
 0% {opacity: 0;}
  100% {opacity: 1;}
`
const Search = styled.form`
  width: 190px;
  position: relative;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.7s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  -webkit-animation-name: fadeIn;
  animation-name: ${Animate};
`;
const CloseSearch = styled.div`
  position: absolute;
  top: 3.5px;
  left: 80%;
`;
const CartContainer = styled.span`
position: relative;
margin: 0;
padding: 0;
`;
const CounterText = styled.p`
  font-size: 10px;
  font-weight: bolder;
`;



const NavBar = () => {
  const { toggleTheme } = useContext(ContextTheme) as any;
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  return (
    <NavBarStyled>
      {isSearchVisible ? (
        <Search>
          <Input
            name="search"
            placeholder="Busca aquí ..."
            type="text"
          />
          <CloseSearch onClick={() => {
            setIsSearchVisible(false);
          }}>
            <Icon fill="fa-solid fa-xmark" color="#e8e8e8" hover="#606060" />
          </CloseSearch>
        </Search>
      ) : (
        <span
          onClick={() => {
            setIsSearchVisible(true);
          }}
        >
          <Icon fill="fa-solid fa-magnifying-glass" margin="0px"></Icon>
        </span>
      )}
      <CartContainer>
      <Icon fill="fa-solid fa-cart-shopping"></Icon>
      <CardCircular bg="#f6d1bc" top="-8px" left="30px" size="13px">
          <CounterText>1</CounterText>
      </CardCircular>
      </CartContainer>
      <Link href="/productos/deseos">
          <Icon fill="fa-regular fa-star"></Icon>
      </Link>
      <ThemeIcon onClick={toggleTheme}>
        <Icon fill="fa-regular fa-lightbulb"></Icon>
      </ThemeIcon>
    </NavBarStyled>
  );
};
export default NavBar;
