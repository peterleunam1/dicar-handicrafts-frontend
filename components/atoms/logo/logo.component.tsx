import { FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ContextTheme from "../../../context/ThemeContextUI";
import LogoWhite from "../../../public/assets/logo-white.png";
import LogoBlack from "../../../public/assets/logo-black.png";
import { LogoProps } from "../../../interfaces";
import { themeMode } from "../../../constants";
import { LogoContainer } from "./logo.styled";


const Logo: FC<LogoProps> = ({ route }) => {
  const { theme } = useContext(ContextTheme);
  return (
    <Link href={route || ""}>
      <LogoContainer>
        <Image
          src={theme === themeMode.light ? LogoWhite : LogoBlack}
          width="3.6875rem"
          height="3.6875rem"
          alt="Logo"
        />
      </LogoContainer>
    </Link>
  );
};
export default Logo;
