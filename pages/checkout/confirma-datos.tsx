/* eslint-disable @next/next/no-sync-scripts */
import { NextPage } from "next";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  CartList,
  Input,
  InputFull,
  ShopLayout,
  Button,
  Select,
} from "../../components";
import ContextAdress from "../../context/AddressContext";
import { EmptyObject, products_combo } from "../../helpers";
import useAdress from "../../hooks/useAdress";
import useUser from "../../hooks/useUser";
import getState from "../../services/address/getStates";
import getCitiesByState from "../../services/address/getCitiesbyState";

const Main = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const UserInformation = styled.section`
  width: 65%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const TitleSection = styled.p`
  font-weight: bolder;
  color: #f6d1bc;
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 15px;
`;
const HalfInput = styled.div`
  width: 45%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const InLineInput = styled.div`
  width: 94%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
`;
const ConfirmText = styled.p`
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  width: 94%;
  text-align: right;
  padding-right: 10px;
  a {
    color: #606060;
    font-weight: 400;
    &:hover {
      font-weight: 600;
    }
  }
`;
const SelectStyled = styled.select`
  width: 100%;
  height: 33px;
  border-radius: 5px;
  color: #606066;
  border: 1px solid rgb(202, 199, 199);
  margin-top: 25px;
  margin-bottom: 10px;
`;
const ButtonC = styled.div`
  width: 25%;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const ConfirmaDatos: NextPage = () => {
  const { address, city, department } = useContext(ContextAdress);
  const { user } = useUser();

  let domicilio;
  let cityCampare;
  let departmentCompare;

  const [state, setState] = useState<string>("");
  const [cityNow, setCityNow] = useState<string>("");
  const { states } = getState() as any;
  const { cities } = getCitiesByState(state) as any;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityNow(e.target.value);
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      return "¿Desea recargar la página web?";
    };
  }, [state]);

  return (
    <ShopLayout
      title="Confirma tus datos"
      descriptionPage="Verifica tus datos para comprar"
    >
      {EmptyObject(user) ? (
        <p>Contenido no disponible</p>
      ) : (
        <>
          <h2>Verifica tus datos</h2>
          <Main>
            <UserInformation>
              <div>
                <TitleSection>Datos de usuario</TitleSection>
                <Input
                  type="text"
                  bradius="5px"
                  fSize="15px"
                  py="7px"
                  label="Nombre completo"
                  mb="10px"
                  placeholder="ej: Juan Perez Lorem"
                />
                <Input
                  type="email"
                  bradius="5px"
                  fSize="15px"
                  py="7px"
                  label="Email"
                  mb="10px"
                  placeholder="usuario@lorem.com"
                />
                <HalfInput>
                  <Input
                    type="number"
                    bradius="5px"
                    fSize="15px"
                    py="7px"
                    label="Celular"
                    mb="10px"
                    placeholder="ej: +57 307 6784509"
                  />
                </HalfInput>
              </div>
              <div>
                <TitleSection>Datos de envío</TitleSection>
                <Input
                  type="text"
                  bradius="5px"
                  fSize="15px"
                  py="7px"
                  label="Dirección"
                  mb="10px"
                  placeholder="ej: Centro, Getsemaní, Calle de las Maravillas No. 30-45"
                />
                <InLineInput>
                  <HalfInput>
                    <Select
                      array={states || []}
                      name="department_name"
                      arg="departamento"
                      label="Seleccione un departamento"
                      onChange={handleChange}
                    />
                  </HalfInput>
                  <HalfInput>
                    <SelectStyled>
                      <option value="">---</option>
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
                  </HalfInput>
                </InLineInput>
                <Input
                  type="text"
                  label="Punto de referencia"
                  placeholder="Ingrese guía"
                  bradius="5px"
                  fSize="15px"
                  py="7px"
                  mb="10px"
                  name="reference"
                />
              </div>
            </UserInformation>

            <CartList mode="summary" array={products_combo} />
          </Main>

          <ButtonC>
            <Button
              text="Continuar"
              bg="#f6d1bc"
              hover="rgba(246, 209, 188, 0.637)"
              mt="25px"
              mb="10px"
            />
          </ButtonC>
        </>
      )}
    </ShopLayout>
  );
};
export default ConfirmaDatos;
