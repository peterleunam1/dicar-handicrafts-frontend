import type { AppProps } from "next/app";
import GlobalStyle from "../globalStyles";
import { ThemeContextProvider } from "../context/ThemeContextUI";
import { AddressContextProvider } from "../context/AddressContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <AddressContextProvider>
        <Component {...pageProps} />
      </AddressContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
