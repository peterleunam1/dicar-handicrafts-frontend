import { FC } from "react";
import Head from "next/head";
import styled from "styled-components";
import { AuthLayoutProps } from "../../interfaces";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Sup = styled.div`
  width: 100%;
  background-color: #f6d1bc;
  height: 30vh;
`;
const Inf = styled.div`
  width: 100%;
  background-color: #fff;
  height: 70vh;
`;

const AuthLayout: FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} - Dicar</title>
      </Head>
      <Div>
        <Sup></Sup>
        <Inf></Inf>
        <Main>{children}</Main>
      </Div>
    </>
  );
};
export default AuthLayout;
