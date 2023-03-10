import { FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ContextTheme from "../../../context/ThemeContextUI";
import LogoWhite from "../../../public/assets/logo-white.png";
import LogoBlack from "../../../public/assets/logo-black.png";
import { LogoProps } from "../../../interfaces";

const LogoContainer = styled.div`
  cursor: pointer;
  @media (max-width: 500px) {
    padding-left: 10%;
  }
`;

const Logo: FC<LogoProps> = ({ route }) => {
  const { theme } = useContext(ContextTheme) as any;

  return (
    <Link href={route || ""}>
      <LogoContainer>
        <Image
          src={theme === "light" ? LogoWhite : LogoBlack}
          width="59px"
          height="59px"
        />
      </LogoContainer>
    </Link>
  );
};
export default Logo;
