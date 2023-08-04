import { FC } from "react";
import { about } from "../../../constants";
import {
  FooterStyled,
  ListItems,
  ListItem,
  CopyandRight,
  Text,
  Credit,
} from "./footer.styled";

const Footer: FC = () => {
  return (
    <>
      <FooterStyled>
        <ListItems>
          <ListItem size="1.25rem" bold={500}>
            {about.title}
          </ListItem>
          <ListItem>{about.contact}</ListItem>
          <ListItem>{about.description}</ListItem>
        </ListItems>
        <CopyandRight>
          <Text>{about.copyright}</Text>
        </CopyandRight>
      </FooterStyled>
      <Credit>Diseño y desarrollo por <strong>Pedro Agames R.</strong></Credit>
    </>
  );
};
export default Footer;
