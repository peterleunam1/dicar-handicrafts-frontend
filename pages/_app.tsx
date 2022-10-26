import type { AppProps } from "next/app";
import GlobalStyle from "../globalStyles";
import { ThemeContextProvider } from "../context/ThemeContextUI";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
