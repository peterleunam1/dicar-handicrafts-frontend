import { FC } from "react";
import Head from "next/head";
import { ShopLayoutProps } from "../../../interfaces";
import { Header, Footer } from "../..";
import { Main } from "./shop-layout.styled";

const ShopLayout: FC<ShopLayoutProps> = ({
  title = "",
  descriptionPage,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title} - Dicar</title>
        <meta name="description" content={descriptionPage} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={descriptionPage} />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
export default ShopLayout;
