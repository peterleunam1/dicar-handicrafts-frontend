import React from "react";
import { ThemeContextUiProps, ThemeContextUiProviderProps } from "../interfaces";
import useThemeMode from "../hooks/useTheme";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../globalStyles";
import { themeMode } from "../constants";

const ContextTheme = React.createContext<ThemeContextUiProps>({
  theme: themeMode.light,
  toggleTheme: () => {},
});

export function ThemeContextProvider({ children }: ThemeContextUiProviderProps) {
  
  const { theme, toggleTheme } = useThemeMode();

  return (
    <ContextTheme.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme === themeMode.light ? light : dark}>
        {children}
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}

export default ContextTheme;
