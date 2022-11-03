import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { NavLateralProps } from "../../../interfaces";
import useUser from "../../../hooks/useUser";
import { EmptyObject } from "../../../helpers";
import { Input, Icon, UserInfo, Button } from "../../../components";

const AsideMenu = styled.aside<{ transform: string }>`
  background-color: ${({ theme }) => theme.background};
  width: 260px;
  height: calc(100vh - 65px);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: hidden;
  margin-top: 65px;
  transition: 0.5s ease transform;
  z-index: 3;
  box-shadow: ${({ theme }) => theme.bshadow};
  transform: ${(props) => props.transform};
  padding: 25px 35px;

  span {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
  }
`;
const Form = styled.form`
  padding-bottom: 25px;
  border-bottom: 1px solid #e8e8e8;
`;
const ListItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:first-of-type {
    margin-top: 25px;
  }
  &:last-of-type {
    margin-bottom: 0px;
    padding-bottom: 25px;
    border-bottom: 1px solid #e8e8e8;
  }
  p {
    width: 88%;
    display: flex;
    justify-content: flex-start;

    &:hover {
      font-weight: bolder;
    }
  }
`;

const NavLateral: FC<NavLateralProps> = ({ transform }) => {
  const { value } = useUser();

  const handleClick = () => {
    localStorage.removeItem("userAuth");
    window.location.reload();
  };

  return (
    <AsideMenu transform={transform}>
      <span>
        <Icon fill="fa-solid fa-xmark" />
      </span>
      <Form>
        <Input
          type="text"
          placeholder="Busque un producto aquí"
          name="search"
          bradius="5px"
          fSize="14px"
        />
      </Form>
      <ul>
        <Link href="/productos/mochilas">
          <ListItem>
            <Icon fill="fa-solid fa-bag-shopping" margin="0px" />
            <p>Mochilas</p>
          </ListItem>
        </Link>
        <Link href="/productos/sandalias">
          <ListItem>
            <Icon fill="fa-solid fa-shoe-prints" margin="0px"></Icon>
            <p>Sandalias</p>
          </ListItem>
        </Link>
        <Link href="/productos/sombreros">
          <ListItem>
            <Icon fill="fa-brands fa-redhat" margin="0px" />
            <p>Sombreros</p>
          </ListItem>
        </Link>
        <Link href="/productos/accesorios">
          <ListItem>
            <Icon fill="fa-solid fa-burst" margin="0px" />
            <p>Accesorios</p>
          </ListItem>
        </Link>
      </ul>

      {EmptyObject(value) ? (
        <>
          <Link href="/auth/login">
            <div>
              <Button
                text="Iniciar sesión"
                bg="#f6d1bc"
                hover="rgba(246, 209, 188, 0.637)"
                mt="100px"
                mb="10px"
              />
            </div>
          </Link>
          <Link href="/auth/registro">
            <div>
              <Button text="Registrarse" bg="#e8e8e8" hover="#cececec3" />
            </div>
          </Link>
        </>
      ) : (
        <>
          <UserInfo
            name={`${value.firstname} ${value.lastname}`}
            email={value.email}
            phone={value.phone_number}
          >
            <ul>
              <Link href={""}>
                <ListItem>
                  <Icon fill=" fa-regular fa-address-book" margin="0" />
                  <p>Agendar dirección</p>
                </ListItem>
              </Link>

              <ListItem onClick={handleClick}>
                <Icon fill="fa-solid fa-arrow-right-from-bracket" margin="0" />
                <p>Cerrar sesión</p>
              </ListItem>
            </ul>
          </UserInfo>
        </>
      )}
    </AsideMenu>
  );
};
export default NavLateral;
