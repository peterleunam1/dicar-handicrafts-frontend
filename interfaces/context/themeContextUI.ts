export interface ThemeContextUiProviderProps {
  children: React.ReactNode;
}
export interface ThemeContextUiProps {
    theme: string;
    toggleTheme: () => void;
}
export interface ThemeData {
  text: string;
  background: string;
  logo: string;
  bshadow: string;
  card: string;
}
