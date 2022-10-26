import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../../../components";

const SocialBarStyled = styled.span`
  display: flex;
  align-items: center;
`;

const SocialBar: FC = () => {
  return (
    <SocialBarStyled>
      <Icon fill="fa-brands fa-instagram" hover="#C13584"></Icon>
      <Icon fill="fa-brands fa-telegram" hover="#229ED9"></Icon>
      <Icon fill="fa-brands fa-whatsapp" hover="#25D366"></Icon>
      <Icon fill="fa-brands fa-facebook" hover="#2f477a"></Icon>
    </SocialBarStyled>
  );
};
export default SocialBar;
