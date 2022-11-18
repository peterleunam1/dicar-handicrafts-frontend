import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useContext, useState } from "react";
import styled from "styled-components";
import { Icon, ThemeIcon, Modal, CardCircular } from "../../../components";
import CounterCartContext from "../../../context/CounterCart";
import ContextTheme from "../../../context/ThemeContextUI";
import { EmptyObject } from "../../../helpers";
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
`;

const NavBar: FC = () => {
  const { toggleTheme } = useContext(ContextTheme) as any;
  const { counter } = useContext(CounterCartContext)
  const { user } = useUser();
  const [status, setStatus] = useState(true)
  const route = useRouter();

  const handleClick = (path: string) => {
    EmptyObject(user) ? (
      <Modal status={status} setStatus={setStatus}>
        <p>hola</p>
      </Modal>
    ) : (
      route.push(path)
    );
  };
  return (
    <NavBarStyled>
      <CartContainer onClick={() => { handleClick("/cart") }}>
        <Icon fill="fa-solid fa-cart-shopping"></Icon>
        <CardCircular bg="#f6d1bc" top="-8px" left="30px" size="13px">
          <CounterText>{counter}</CounterText>
        </CardCircular>
      </CartContainer>

      <div onClick={() => handleClick("/productos/deseos")}>
        <Icon fill="fa-regular fa-star"></Icon>
      </div>
      <ThemeIcon onClick={toggleTheme}>
        <Icon fill="fa-regular fa-lightbulb"></Icon>
      </ThemeIcon>
    </NavBarStyled>
  );
};
export default NavBar;
