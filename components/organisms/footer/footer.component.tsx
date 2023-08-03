import { FC } from "react";
import { about } from "../../../constants";
import {
  FooterStyled,
  ListItems,
  ListItem,
  CopyandRight,
  Text,
} from "./footer.styled";

const Footer: FC = () => {
  return (
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
  );
};
export default Footer;
