import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { Icon, ThemeIcon, CardCircular } from "../..";
import ContextTheme from "../../../context/ThemeContextUI";
import { useCart } from "../../../hooks";
import { CartContainer, CounterText, NavBarStyled } from "./nav-bar.styled";

const NavBar: FC = () => {
  const { toggleTheme } = useContext(ContextTheme);
  const { cart } = useCart();
  const route = useRouter();

  const handleClick = (path: string) => {
    route.push(path);
  };

  return (
    <NavBarStyled>
      <CartContainer onClick={() => handleClick("/cart")}>
        <Icon fill="fa-solid fa-cart-shopping" mr="0"></Icon>
        <CardCircular top="-8px" left="1.875rem" size=".8125rem">
          <CounterText>{cart.length}</CounterText>
        </CardCircular>
      </CartContainer>
      <ThemeIcon onClick={toggleTheme}>
        <Icon fill="fa-regular fa-lightbulb"></Icon>
      </ThemeIcon>
    </NavBarStyled>
  );
};
export default NavBar;
