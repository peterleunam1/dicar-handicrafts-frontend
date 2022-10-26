import { useState } from "react";

const useThemeMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return {
    theme,
    toggleTheme,
  };
};

export default useThemeMode;
