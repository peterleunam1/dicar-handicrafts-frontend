import { FC } from "react";
import Head from "next/head";
import { AdminLayoutProps } from "../../interfaces";
import styled from "styled-components";
import NavLateral from "../molecules/nav-lateral/nav-lateral";
import TopCard from "../atoms/top-card/top-card";
import Logo from "../atoms/logo/logo";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  section {
    margin-left: 340px;
    height: 100vh;
    width: calc(100% - 340px);
  }
`;
const LogoHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;
const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
  span {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: calc(100vh - 70px);
  margin-top: 70px;
  padding: 0px 7.5%;
`;
const Menu = styled.nav`
  width: 23%;
  height: 70vh;
  background-color: pink;
  /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
`;
const MainContainer = styled.div`
  background-color: red;
  width: 73%;
`;

const AdminLayout: FC<AdminLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} - Dicar</title>
        <meta name="og:title" content={title} />
      </Head>
      <main>
        <TopCard>
          <HeaderContainer>
            <span>
              <p>Panel de Administración</p>
              <Logo route="/" />
            </span>
            <p>salir</p>
          </HeaderContainer>
        </TopCard>
        <Section>
          <Menu>xd</Menu>
          <MainContainer>{children}</MainContainer>
        </Section>
      </main>
    </>
  );
};
export default AdminLayout;
