export interface ThemeModel {
  light: string;
  dark: string;
}

export interface ThemePalette {
  text: string;
  background: string;
  logo: string;
  bshadow: string;
  card: string;
  skeleton: string;
  skeletonGradient: string;
}

export interface ThemePaletteModel {
  light: ThemePalette;
  dark: ThemePalette;
}
