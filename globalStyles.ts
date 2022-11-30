import { createGlobalStyle } from "styled-components";
import { ThemeData } from "./interfaces/context/themeContextUI";

export const light = {
  text: "#606060",
  background: "#FFF",
  logo: "../../../public/assets/logo-white.png",
  bshadow: "3px 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  card: "#e8e8e8"
};

export const dark = {
  text: "blanchedalmond",
  background: "#000",
  logo: "../../../public/assets/logo-black.png",
  bshadow: "3px 1px 9px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)",
  card: "#211917"
};

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color:${({ theme }) => (theme as ThemeData).background};
    color: ${({ theme }) => (theme as ThemeData).text};
  }
  ul{
    list-style: none;
  }
  *{
    margin: 0;
    padding: 0;
  }
`;
export default GlobalStyles;
