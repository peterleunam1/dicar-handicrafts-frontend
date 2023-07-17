import { useState } from "react";
import { themeMode } from "../constants";

export default function useThemeMode() {
  const [theme, setTheme] = useState<string>(themeMode.light);

  const toggleTheme = () => {
    if (theme === themeMode.light) {
      setTheme(themeMode.dark);
    } else {
      setTheme(themeMode.light);
    }
  };
  return {
    theme,
    toggleTheme,
  };
}
