import type { AppProps } from "next/app";
import GlobalStyle from "../globalStyles";
import { ThemeContextProvider } from "../context/ThemeContextUI";
import { UserContextProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
