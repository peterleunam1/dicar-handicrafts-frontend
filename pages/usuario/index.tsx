import { NextPage } from "next";
import styled from "styled-components";
import { ShopLayout } from "../../components";
import Accordion from "../../components/atoms/accordion/accordion";
import { EmptyObject } from "../../helpers";
import useAdress from "../../hooks/useAdress";
import useUser from "../../hooks/useUser";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  margin: 0 auto;
  span {
    width: 100%;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const User: NextPage = () => {
  const { user } = useUser();
  const { data, loading } = useAdress();
  const { data: addresses, status } = data as any;
  console.log(addresses);
  console.log(data);
  return (
    <ShopLayout title="Perfil" descriptionPage="Visualiza tus datos">
      <h1>Perfil</h1>
      <Container>
        <Accordion title="Datos personales">
          {EmptyObject(user) ? (
            <p>Cargando...</p>
          ) : (
            <>
              <span>
                <p>Nombre:</p>
                {user.firstname}
              </span>
              <span>
                <p>Apellido: </p>
                {user.lastname}
              </span>
              <span>
                <p>Email: </p>
                {user.email}
              </span>
              <span>
                <p>Documeto: </p>
                {user.document}
              </span>
              <span>
                <p>Telefono: </p>
                {user.phone_number}
              </span>
            </>
          )}
        </Accordion>
        <Accordion title="Mis direcciones">
          {status === 404 ? (
            <p>No tienes direcciones registradas</p>
          ) : (
            <>
              {loading ? (
                <p>Cargando...</p>
              ) : (
                <>
                  {addresses.map((address: any) => (
                    <span key={address.id}>
                      <p>{address.address}</p>
                      {address.city_name}
                    </span>
                  ))}
                </>
              )}
            </>
          )}
        </Accordion>
        <Accordion title="De la cuenta">
          <span>
            <p>Fecha de afiliación</p>
            {user.createdAt}
          </span>
          <span>
            <p>Fecha de actualización</p>
            {user.updatedAt}
          </span>
          <span>
            <p>Estado</p>
            Activa
          </span>
          <span>
            <p>Contraseña</p>
            <a href="#">Cambiar contraseña</a>
          </span>
        </Accordion>
      </Container>
    </ShopLayout>
  );
};
export default User;
