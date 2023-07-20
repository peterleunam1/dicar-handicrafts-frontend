import { FC } from "react";
import styled from "styled-components";
import { about } from "../../../constants";

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
const ListItem = styled.li<{ bold?: number; size?: string; margin?: string }>`
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
         {about.title}
        </ListItem>
        <ListItem>{about.contact}</ListItem>
        <ListItem>{about.description}</ListItem>
      </ListItems>
      <CopyandRight>
        <Text>{about.copyright}</Text>
      </CopyandRight>
    </FooterStyled>
  );
};
export default Footer;
