import { FC } from "react";
import styled from "styled-components";
import { CardMenu } from "../../../components";
import { MenuProps } from "../../../interfaces";


const MenuStyled = styled.section`
  width: 95%;
  margin: 35px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 100%;
    margin: 0 auto;
  }
`;

const Menu: FC<MenuProps> = ({ images }) => {
  const categories = ["mochilas", "sandalias", "sombreros", "accesorios"];
  return (
    <MenuStyled>
      {images.map((element, index) => {
        return (
          <CardMenu key={element.blurDataURL} src={element} title={categories[index]} />
        )
      })}
    </MenuStyled>
  );
};
export default Menu;
