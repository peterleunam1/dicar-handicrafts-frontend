import { FC } from "react";
import Link from "next/link";
import { NavLateralProps } from "../../../interfaces";
import { Icon, SocialBar } from "../..";
import { categories, about } from "../../../constants";
import {
  AsideMenu,
  Close,
  ListItem,
  SocialContainer2,
} from "./nav-lateral.styled";

const NavLateral: FC<NavLateralProps> = ({
  transform,
  display_items,
  height,
  mg,
  pt,
  setIsOpen,
}) => {
  const handleClick = ({ href }: { href: string }) => {
    setIsOpen(false);
    window.location.href = href;
  };

  return (
    <AsideMenu
      transform={transform}
      height={height || "calc(100vh - 4.0625rem)"}
      mg={mg || "4.3125rem"}
      pt={pt || "1.5625rem"}
    >
      <Close
        onClick={() => setIsOpen(false)}
        display={display_items || "block"}
      >
        <Icon fill="fa-solid fa-xmark" />
      </Close>
      <ul>
        <ListItem>
          <strong>Categorías</strong>
        </ListItem>
        {categories.map(({ id, name, href, icon }) => {
          return (
            <Link href="#" key={id}>
              <a onClick={() => handleClick({ href })}>
                <ListItem>
                  <Icon fill={icon} margin="0"></Icon>
                  <p>{name}</p>
                </ListItem>
              </a>
            </Link>
          );
        })}
      </ul>
      <ul>
        <ListItem>
          <strong>{about.title}</strong>
        </ListItem>
        <ListItem>{about.contact}</ListItem>
        <ListItem>{about.description}</ListItem>
      </ul>
      <ul>
        <ListItem>
          <SocialContainer2>
            <SocialBar />
          </SocialContainer2>
        </ListItem>
      </ul>
    </AsideMenu>
  );
};
export default NavLateral;
