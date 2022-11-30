import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useContext, useState } from "react";
import styled from "styled-components";
import { Icon, ThemeIcon, Modal, CardCircular } from "../../../components";
import CounterCartContext from "../../../context/CounterCart";
import ContextTheme from "../../../context/ThemeContextUI";
import { EmptyObject } from "../../../helpers";
import useUser from "../../../hooks/useUser";
import useQuantity from "../../../hooks/useQuantity";
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
  const [noUserLogged, setNoUserLogged] = useState(false);
  const { user } = useUser();
  const [status, setStatus] = useState(true)
  const route = useRouter();
  const { quantity } = useQuantity();
  const handleClick = (path: string) => {
    console.log({ user, isEmppty: EmptyObject(user) });
    EmptyObject(user) ? (
      setNoUserLogged(true)
    ) : (
      route.push(path)
    );
  };
  return (
    <NavBarStyled>
      {
        noUserLogged && (
          <Modal status={status} setStatus={setStatus}>
            No hay un usuario logeado, logeate para ingresar productos al carrito!
          </Modal>
        )
      }
      <CartContainer onClick={() => { handleClick("/cart") }}>
        <Icon fill="fa-solid fa-cart-shopping"></Icon>
        <CardCircular bg="#f6d1bc" top="-8px" left="30px" size="13px">
          <CounterText>{quantity}</CounterText>
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
