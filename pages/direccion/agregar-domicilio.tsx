import { NextPage } from "next";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import styled from "styled-components";
import {
  ShopLayout,
  Select,
  InputFull,
  Input,
  Button,
  Modal,
} from "../../components";
import ContextAdress from "../../context/AddressContext";
import { EmptyObject } from "../../helpers";
import useUser from "../../hooks/useUser";
import addAddress from "../../services/address/addAdress";
import getCitiesByState from "../../services/address/getCitiesbyState";
import getState from "../../services/address/getStates";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  article {
    width: 90%;
    display: flex;
    justify-content: center;
  }
  h2 {
    margin-bottom: 25px;
  }
`;
const FieldsInLine = styled.div`
  width: 94.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    width: 47%;
  }
`;
const SelectStyled = styled.select`
  width: 95.5%;
  margin-bottom: 10px;
  height: 33px;
  border-radius: 5px;
  color: #606066;
  border: 1px solid rgb(202, 199, 199);
  padding-left: 15px;
`;
const LabelInput = styled.label`
  font-size: 13px;
  font-weight: 500;
`;
const ButtonC = styled.div<{ margin?: string }>`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${(props) => props.margin || "0px"};
`;
const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h4 {
    width: 75%;
    text-align: center;
  }
`;

const AgregarDomicilio: NextPage = () => {
  const { user } = useUser();

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState({});
  const { states } = getState() as any;
  const { cities } = getCitiesByState(state) as any;
  const { setUpdate } = useContext(ContextAdress)
  const [modal, setModal] = useState(true);
  const route = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  const handleAdrees = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress({
      city_name: city,
      department_name: state,
      user_document: user.document,
      [e.target.name]: e.target.value.toLocaleUpperCase(),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { status } = (await addAddress(adress)) as any;
    if (status === 201 || status === 200 || status === 204) {
      setUpdate(true)
      route.push("/direccion/selecciona-domicilio")
      alert("Dirección creada con éxito");
    } else if (status === 401) {
      <Modal status={modal} setStatus={setModal}>
        <h3>
          Su sesión ha expirado, para completar esta accion por favor ingrese de
          nuevo
        </h3>
        <Link href="/auth/login">
          <ButtonC margin="25px">
            <Button
              text="Aceptar"
              bg="#f6d1bc"
              hover="rgba(246, 209, 188, 0.637)"
            />
          </ButtonC>
        </Link>
      </Modal>;
    } else {
      alert("Hubo un problema");
    }
  };

  return (
    <ShopLayout
      title="Agregar domicilio"
      descriptionPage="Agrega una nueva dirección a tu cuenta"
    >
      {EmptyObject(user) ? (
        <Modal status={modal} setStatus={setModal}>
          <ModalContainer>
            <h4>
              Para poder registrar una dirección es necesario que hayas iniciado
              sesión, sino cuentas con una registrate de forma gratis{" "}
              <Link href="/auth/registro">aquí</Link>.
            </h4>
            <Link href="/auth/login">
              <ButtonC margin="25px">
                <Button
                  text="Iniciar sesión"
                  bg="#f6d1bc"
                  hover="rgba(246, 209, 188, 0.637)"
                />
              </ButtonC>
            </Link>
          </ModalContainer>
        </Modal>
      ) : (
        <Main>
          <Container>
            <h2>Agregar domicilio</h2>
            <InputFull
              type="text"
              value={user.document}
              bradius="5px"
              fSize="15px"
              py="7px"
              label="Documento"
              mb="10px"
            />
            <FieldsInLine>
              <span>
                <InputFull
                  type="text"
                  value={user.firstname}
                  bradius="5px"
                  fSize="15px"
                  py="7px"
                  label="Nombres"
                  mb="10px"
                />
              </span>
              <span>
                <InputFull
                  type="text"
                  value={user.lastname}
                  bradius="5px"
                  fSize="15px"
                  py="7px"
                  label="Apellidos"
                  mb="10px"
                />
              </span>
            </FieldsInLine>
            <form onSubmit={handleSubmit}>
              <Select
                array={states || []}
                name="department_name"
                arg="departamento"
                label="Seleccione un departamento"
                onChange={handleChange}
              />
              <LabelInput>Seleccionde municipio</LabelInput>
              <SelectStyled name="city_name" onChange={handleChange2}>
                {cities ? (
                  cities.map((cities: any, index: number) => {
                    return (
                      <option value={cities[1].municipio} key={index++}>
                        {cities[1].municipio}
                      </option>
                    );
                  })
                ) : (
                  <></>
                )}
              </SelectStyled>
              <Input
                type="text"
                label="Dirección del domicilio"
                placeholder="Barrio - KR CL N°"
                bradius="5px"
                fSize="15px"
                py="7px"
                mb="10px"
                name="address"
                onChange={handleAdrees}
              />
              <FieldsInLine>
                <span>
                  <InputFull
                    type="text"
                    value={user.phone_number}
                    bradius="5px"
                    fSize="15px"
                    py="7px"
                    label="Teléfono"
                    mb="40px"
                  />
                </span>
              </FieldsInLine>
              <article>
                <ButtonC>
                  <Button
                    text="Confirmar"
                    bg="#f6d1bc"
                    hover="rgba(246, 209, 188, 0.637)"
                  />
                </ButtonC>
              </article>
            </form>
          </Container>
        </Main>
      )}
    </ShopLayout>
  );
};
export default AgregarDomicilio;
