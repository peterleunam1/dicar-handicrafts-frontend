import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Icon, ThemeIcon, Modal, CardCircular } from "../../../components";
import ContextTheme from "../../../context/ThemeContextUI";
import { EmptyObject } from "../../../helpers";
import useCart from "../../../hooks/useCart";
import useUser from "../../../hooks/useUser";

const NavBarStyled = styled.nav`
  display: flex;
  align-items: center;
`;
const CartContainer = styled.span`
  position: relative;
  margin: 0;
  padding: 0;
`;
const CounterText = styled.p`
  font-size: 10px;
  font-weight: bolder;
  color: #000;
  font-weight: bold;
`;

const NavBar: FC = () => {
  const { toggleTheme } = useContext(ContextTheme) as any;
  const route = useRouter();
  const {count} = useCart()
  const handleClick = (path: string) => {
      route.push(path)
  };

  return (
    <NavBarStyled>
      <CartContainer onClick={() => { handleClick("/cart") }}>
        <Icon fill="fa-solid fa-cart-shopping" mr="0"></Icon>
        <CardCircular bg="#f6d1bc" top="-8px" left="30px" size="13px">
          <CounterText>{count}</CounterText>
        </CardCircular>
      </CartContainer>
      <ThemeIcon onClick={toggleTheme}>
        <Icon fill="fa-regular fa-lightbulb"></Icon>
      </ThemeIcon>
    </NavBarStyled>
  );
};
export default NavBar;
