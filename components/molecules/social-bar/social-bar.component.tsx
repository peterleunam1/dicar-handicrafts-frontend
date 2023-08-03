import { FC } from "react";
import { Icon } from "../../../components";
import { socialMediaIcons } from "../../../constants";
import { SocialBarStyled } from "./social-bar.styled";

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
