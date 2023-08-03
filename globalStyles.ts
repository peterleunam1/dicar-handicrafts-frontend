import { createGlobalStyle } from "styled-components";
import { ThemeData } from "./interfaces/context/themeContextUI";

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
