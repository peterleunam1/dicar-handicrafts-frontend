import { FC } from "react";
import Head from "next/head";
import { ShopLayoutProps } from "../../interfaces";
import styled from "styled-components";
import { Header, Footer } from "../../components";
import { CounterCartProvider } from "../../context/CounterCart";
import { CartContextProvider } from "../../context/CartContext";

const Main = styled.main`
  margin: 100px auto 70px auto;
  width: 90%;
  padding: "0px 3px";
  min-height: 42vh;
  max-width: 1440px;
`;
const ShopLayout: FC<ShopLayoutProps> = ({
  title,
  descriptionPage,
  children,
}) => {
  return (
    <CounterCartProvider>
      <CartContextProvider>
        <Head>
          <title>{title} - Dicar</title>
          <meta name="description" content={descriptionPage} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={descriptionPage} />
        </Head>

        <Header />

        <Main>{children}</Main>

        <Footer />
      </CartContextProvider>
    </CounterCartProvider>
  );
};
export default ShopLayout;
