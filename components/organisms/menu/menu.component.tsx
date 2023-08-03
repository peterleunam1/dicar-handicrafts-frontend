import { FC } from "react";
import { CardMenu } from "../../../components";
import { MenuProps } from "../../../interfaces";
import { categories } from "../../../constants";
import { MenuStyled } from "./menu.styled";

const Menu: FC<MenuProps> = ({ images }) => {
  return (
    <MenuStyled>
      {images.map((element, index) => {
        return (
          <CardMenu
            key={element.blurDataURL}
            src={element}
            title={categories[index].name}
          />
        );
      })}
    </MenuStyled>
  );
};
export default Menu;
