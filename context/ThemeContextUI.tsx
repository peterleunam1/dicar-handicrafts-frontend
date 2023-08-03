import React from "react";
import {
  ThemeContextUiProps,
  ThemeContextUiProviderProps,
} from "../interfaces";
import { useTheme } from "../hooks";
import { ThemeProvider } from "styled-components";
import { themeMode, themePalette } from "../constants";

const ContextTheme = React.createContext<ThemeContextUiProps>({
  theme: themeMode.light,
  toggleTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: ThemeContextUiProviderProps) {
  const { dark, light } = themePalette;
  const { theme, toggleTheme } = useTheme();

  return (
    <ContextTheme.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme === themeMode.light ? light : dark}>
        {children}
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}

export default ContextTheme;
