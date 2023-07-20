import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { NavLateralProps } from "../../../interfaces";
import { Icon, SocialBar } from "../..";
import { categories, about } from "../../../constants";

const AsideMenu = styled.aside<{
  transform: string;
  height: string;
  mg: string;
  pt: string;
}>`
  background-color: ${({ theme }) => theme.background};
  width: 260px;
  height: ${(props) => props.height};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: hidden;
  margin-top: ${(props) => props.mg};
  transition: 0.5s ease transform;
  z-index: 3;
  box-shadow: ${({ theme }) => theme.bshadow};
  transform: ${(props) => props.transform};
  padding: 25px 35px;
  padding-top: ${(props) => props.pt};

  @media (max-width: 500px) {
    width: 62%;
  }

  figure {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const Close = styled.span<{ display: string }>`
  width: 100%;
  margin-bottom: 25px;
  display: ${(props) => props.display};
  display: flex;
  justify-content: flex-end;
`;
const ListItem = styled.li<{ color?: string }>`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:first-of-type {
    margin-top: 25px;
  }
  &:last-of-type {
    margin-bottom: 0px;
    padding-bottom: 25px;
    border-bottom: 1px solid #e8e8e8;
  }
  p {
    width: 88%;
    display: flex;
    justify-content: flex-start;
    color: ${(props) => props.color || ""};

    &:hover {
      font-weight: bolder;
    }
  }
`;

const SocialContainer2 = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 500px) {
    display: block;
    width: min-content;
    margin-left: 20%;
  }
`;
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
      height={height || "calc(100vh - 65px)"}
      mg={mg || "69px"}
      pt={pt || "25px"}
    >
      <Close
        onClick={() => setIsOpen(false)}
        display={display_items || "block"}
      >
        <Icon fill="fa-solid fa-xmark" />
      </Close>
      <ul>
        <ListItem><strong>Categorías</strong></ListItem>
        {categories.map(({ id, name, href, icon }) => {
          return (
            <Link href="#" key={id}>
              <a onClick={() => handleClick({ href })}>
                <ListItem>
                  <Icon fill={icon} margin="0px"></Icon>
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
