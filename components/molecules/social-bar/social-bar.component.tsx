import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../../../components";
import { socialMediaIcons } from "../../../constants";

const SocialBarStyled = styled.span`
  display: flex;
  align-items: center;
`;

const SocialBar: FC = () => {
  return (
    <SocialBarStyled>
      {socialMediaIcons.map(({ name, icon, hover }) => (
        <Icon key={name} fill={icon} hover={hover}></Icon>
      ))}
    </SocialBarStyled>
  );
};
export default SocialBar;
