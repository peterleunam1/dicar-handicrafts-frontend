import { FC } from "react";
import Head from "next/head";
import { AdminLayoutProps } from "../../interfaces";
import styled from "styled-components";
import NavLateral from "../molecules/nav-lateral/nav-lateral";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  section{
    margin-left: 340px;
    height: 100vh;
    width: calc(100% - 340px);
  }
`;

const AdminLayout: FC<AdminLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} - Dicar</title>
        <meta name="og:title" content={title} />
      </Head>
      <Main>
        <NavLateral
        setIsOpen={()=>""}
          transform=""
          height="100vh"
          mg="0px"
          display_items="none"
          pt="4%"
          logo={true}
        ></NavLateral>{" "}
        <section>
            {children}
        </section>
      </Main>
    </>
  );
};
export default AdminLayout;
