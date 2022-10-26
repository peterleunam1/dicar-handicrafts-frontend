import { FC, useContext, useState } from "react";
import styled,{keyframes} from "styled-components";
import { Icon, ThemeIcon, Input } from "../../../components";
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


const NavBar: FC = () => {
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
            <Icon fill="fa-solid fa-xmark" color="#e8e8e8" hover="#606060"/>
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
      <Icon fill="fa-solid fa-cart-shopping"></Icon>
      <Icon fill="fa-regular fa-star"></Icon>
      <ThemeIcon onClick={toggleTheme}>
        <Icon fill="fa-regular fa-lightbulb"></Icon>
      </ThemeIcon>
    </NavBarStyled>
  );
};
export default NavBar;
