import { FC } from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  background-color: rgb(202, 199, 199);
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
  color: #000;
`;
const ListsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const ListItems = styled.ul`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ListItem = styled.li<{ bold?: number; size?: string; margin?: string}>`
  width: 85%;
  font-size: ${(props) => props.size || "15px"};
  font-weight: ${(props) => props.bold || 300};
  margin-bottom: ${(props) => props.margin || "0px"}; 
  cursor: pointer;
`;
const CopyandRight = styled.div`
  width: 100%;
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
`;
const Footer: FC = () => {
  return (
    <FooterStyled>
      <ListsContainer>
        <ListItems>
          <ListItem size="20px" bold={500}>
            Atención al cliente
          </ListItem>
          <ListItem>Solicitud de cambio</ListItem>
          <ListItem>Peticiones, quejas y/o reclamos. </ListItem>
        </ListItems>

        <ListItems>
          <ListItem size="20px" bold={500}>
            Enlaces de interés
          </ListItem>
          <ListItem>Nosotros</ListItem>
          <ListItem>Preguntas frecuentes</ListItem>
          <ListItem>Politica de privacidad</ListItem>
          <ListItem>Términos y condiciones </ListItem>
        </ListItems>

        <ListItems>
          <ListItem size="20px" bold={500}>
            Contacto
          </ListItem>
          <ListItem>+57 300 7529260</ListItem>
          <ListItem>
            Centro Comercial Parque Heredia Local 154 Cartagena de Indias.{" "}
          </ListItem>
        </ListItems>
      </ListsContainer>
      <CopyandRight>
        <PayMethods>Métodos de Pago</PayMethods>
        <Text>
          Copyright © 2021 Artesanias Dicar . Todos los derechos reservados.
        </Text>
      </CopyandRight>
    </FooterStyled>
  );
};
export default Footer;
