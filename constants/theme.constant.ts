import { ThemeModel, ThemePaletteModel } from "../interfaces";

export const themeMode: ThemeModel = {
  light: "light",
  dark: "dark",
};

export const themePalette: ThemePaletteModel = {
  light: {
    text: "#606060",
    background: "#FFF",
    logo: "../../../public/assets/logo-white.png",
    bshadow:
      ".1875rem .0625rem .1875rem 0 rgba(0, 0, 0, 0.1), 0 .0625rem .125rem 0 rgba(0, 0, 0, 0.06)",
    card: "#e8e8e8",
    skeleton: "#f6f7f8",
    skeletonGradient:
      "linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)",
  },
  dark: {
    text: "blanchedalmond",
    background: "#121212",
    logo: "../../../public/assets/logo-black.png",
    bshadow:
      ".1875rem .0625rem .5625rem 0 rgba(255, 255, 255, 0.1), 0 .0625rem .125rem 0 rgba(255, 255, 255, 0.06)",
    card: "#211917",
    skeleton: "#212122",
    skeletonGradient:
      "linear-gradient(to right, #212122 0%, #1e1e1f 20%, #212122 40%, #212122 100%)",
  },
};
