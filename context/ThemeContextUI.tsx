import React from "react";
import { ThemeContextUi } from "../interfaces";
import useThemeMode from "../hooks/useTheme";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../globalStyles";

const ContextTheme = React.createContext({});

export function ThemeContextProvider({ children }: ThemeContextUi) {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <ContextTheme.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        {children}
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}

export default ContextTheme;
