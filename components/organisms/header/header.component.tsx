import { FC, useState } from "react";
import {
  Icon,
  SocialBar,
  NavBar,
  NavLateral,
  Logo,
  TopCard,
} from "../../../components";
import { OptionsLeft, SocialContainer } from "./header.styled";

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <TopCard>
      <OptionsLeft>
        <span onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <Icon fill="fa-solid fa-bars" margin="0" />
        </span>
        <SocialContainer>
          <SocialBar />
        </SocialContainer>
        {isOpenMenu ? (
          <NavLateral transform="translateX(0)" setIsOpen={setIsOpenMenu} />
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
