import type { AppProps } from "next/app";
import GlobalStyle from "../globalStyles";
import { ThemeContextProvider } from "../context/ThemeContextUI";
import { CartContextProvider } from "../context/CartContext";
 


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
        <GlobalStyle />
          <Component {...pageProps} />
      </CartContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
