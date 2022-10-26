import { FC } from "react";
import styled from "styled-components";
import { NavLateralProps } from "../../../interfaces";

const AsideMenu = styled.aside<{transform:string}>`
    background-color:  ${({ theme }) => theme.background};
    width: 260px;
    height: calc(100vh - 65px);
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    overflow-y: hidden;
    margin-top: 65px;
    transition: 0.5s ease transform;
    z-index: 3;
    box-shadow: ${({ theme }) => theme.bshadow};
    transform: ${(props) => props.transform};
`;
const NavLateral: FC<NavLateralProps>= ({transform}) => {
  return (
    <AsideMenu transform={transform}>
        <h1>menú</h1>
    </AsideMenu>
  );
};
export default NavLateral;
