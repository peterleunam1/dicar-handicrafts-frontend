import { FC } from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.card};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0px;
  color: ${(props) => props.theme.text};
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ListItems = styled.ul`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const ListItem = styled.li<{ bold?: number; size?: string; margin?: string}>`
  width: 85%;
  font-size: ${(props) => props.size || "15px"};
  font-weight: ${(props) => props.bold || 300};
  margin-bottom: ${(props) => props.margin || "0px"}; 
  cursor: pointer;
`;
const CopyandRight = styled.div`
  width: 60%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const PayMethods = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin: 25px 0px;
`;
const Text = styled.p`
  text-align: center;
  font-weight: 350;
  font-size: 14px;
  max-width: 80%;
  @media (max-width: 500px) {
   text-align: left;
    padding-left: 20px;
    margin-top: 30px;
  }
`;
const Footer: FC = () => {
  return (
    <FooterStyled>
        <ListItems>
          <ListItem size="20px" bold={500}>
            Contacto
          </ListItem>
          <ListItem>+57 300 7529260</ListItem>
          <ListItem>
            Centro Comercial Parque Heredia Local 154 Cartagena de Indias.{" "}
          </ListItem>
        </ListItems>
      <CopyandRight>
        <Text>
          Copyright © 2021 Artesanias Dicar . Todos los derechos reservados.
        </Text>
      </CopyandRight>
    </FooterStyled>
  );
};
export default Footer;
