/* eslint-disable @next/next/no-sync-scripts */
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import {
  CartList,
  Input,
  ShopLayout,
  Button,
  Select,
} from "../../components";
import { products_combo } from "../../helpers";
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
  /* padding: 0px 7%; */
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
  const [state, setState] = useState<string>("");
  const [cityNow, setCityNow] = useState<string>("");
  const { states } = getState() as any;
  const { cities } = getCitiesByState(state) as any;
  const [data, setData] = useState<Record<string, string>>({});
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityNow(e.target.value);
  };
  const handleChangeResume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  console.log(data);
  
  const searchParams = Object.keys(data)
    .map((key) => {
      return encodeURIComponent(key) + ":%20" + encodeURIComponent(data[key]);
    })
    .join(`%0A`);

  const produsct = products_combo.map((product) => {
    return (
      encodeURIComponent(product.name!) +
      ":%0A %20" +
      "%0A %20 Miralo en: *" +
      encodeURIComponent(
        `https://dicar-handicrafts-frontend.vercel.app/productos/${product.category}/${product.id}%0A`
      )
    );
  });
  return (
    <ShopLayout
      title="Confirma tus datos"
      descriptionPage="Verifica tus datos para comprar"
    >
      <h2>Verifica tus datos</h2>
      <Main>
        <UserInformation>
            <TitleSection>Datos de usuario</TitleSection>
            <Input
              type="text"
              bradius="5px"
              fSize="15px"
              py="7px"
              label="Nombre completo"
              mb="10px"
              placeholder="ej: Juan Perez Lorem"
              onChange={handleChangeResume}
              name="*👤 Nombre*"
            />
            <Input
              type="email"
              bradius="5px"
              fSize="15px"
              py="7px"
              label="Email"
              mb="10px"
              placeholder="usuario@lorem.com"
              onChange={handleChangeResume}
              name="*📨 Correo electrónico*"
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
                onChange={handleChangeResume}
                name="*📲 Telefono*"
              />
            </HalfInput>
            <TitleSection>Datos de envío</TitleSection>
            <Input
              type="text"
              bradius="5px"
              fSize="15px"
              py="7px"
              label="Dirección"
              mb="10px"
              placeholder="ej: Centro, Getsemaní, Calle de las Maravillas No. 30-45"
              onChange={handleChangeResume}
              name="*📍➡️ Dirección*"
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
                <SelectStyled onChange={handleChange2}>
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
              name="*🗒️ Datos de guía*"
              onChange={handleChangeResume}
            />
        </UserInformation>
        <CartList mode="summary" />
      </Main>

      <ButtonC onClick={() => {}}>
        <a
          href={`https://api.whatsapp.com/send?phone=573007529260&text=*¡Saludoos!%0AEstoy interesado en alguno de tus productos, estos son mis datos*%0A${searchParams}%0A*🏙️ Departamento*: ${state}%0A*📍 Ciudad*: ${cityNow}%0A%20${produsct}%0A`}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            text="Continuar"
            bg="#f6d1bc"
            hover="rgba(246, 209, 188, 0.637)"
            mt="25px"
            mb="10px"
          />
        </a>
      </ButtonC>
    </ShopLayout>
  );
};
export default ConfirmaDatos;
