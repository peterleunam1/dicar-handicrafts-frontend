import { FC } from "react";
import styled from "styled-components";
import { CardMenu } from "../../../components";
import { MenuProps } from "../../../interfaces";


const MenuStyled = styled.section`
  width: 90%;
  margin: 40px auto 60px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;

const Menu: FC<MenuProps> = ({ images }) => {
  const titles = ["mochilas", "sandalias", "sombreros", "accesorios"];
  return (
    <MenuStyled>
      {images.map((element, indx) => {
        return (
            <CardMenu key={element} src={element} title={titles[indx]}/>
        )
      })}
    </MenuStyled>
  );
};
export default Menu;
