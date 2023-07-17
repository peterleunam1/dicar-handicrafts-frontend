import { FC, useState } from "react";
import styled from "styled-components";
import {
  Icon,
  SocialBar,
  NavBar,
  NavLateral,
  Logo,
  TopCard,
} from "../../../components";

const OptionsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SocialContainer = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <TopCard>
      <OptionsLeft>
        <span onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <Icon fill="fa-solid fa-bars" margin="0px" />
        </span>
        <SocialContainer>
          <SocialBar />
        </SocialContainer>
        {isOpenMenu ? (
          <NavLateral transform="translateX(0px)" setIsOpen={setIsOpenMenu} />
        ) : (
          <NavLateral
            transform="translateX(-350px)"
            setIsOpen={setIsOpenMenu}
          />
        )}
      </OptionsLeft>
      <Logo route="/" />
      <NavBar />
    </TopCard>
  );
};
export default Header;
