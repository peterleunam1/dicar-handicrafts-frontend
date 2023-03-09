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
    gap: 20px;
    width: 90%;
    margin: 0 auto;
  }
`;

const Menu: FC<MenuProps> = ({ images }) => {
  const titles = ["mochilas", "sandalias", "sombreros", "accesorios"];
  return (
    <MenuStyled>
      {images.map((element, indx) => {
        return (
          <CardMenu key={element.blurDataURL} src={element} title={titles[indx]} />
        )
      })}
    </MenuStyled>
  );
};
export default Menu;
