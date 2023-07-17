import { FC } from "react";
import styled from "styled-components";
import Input from "../../atoms/input/input";
import { regexs } from "../../../constants";
import getState from "../../../services/address/get-state";
import getCitiesByState from "../../../services/address/get-current-municipality";
import Select from "../../atoms/select/select";

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
interface CheckoutFormProps {
  handleChangeResume: (e: any) => void;
  handleChange: (e: any) => void;
  handleChange2: (e: any) => void;
  cities: any;
  states: any;
  state: string;
  city: string;
}
const CheckoutForm: FC<CheckoutFormProps> = ({
  handleChange,
  handleChange2,
  handleChangeResume,
  states,
  cities,
}) => {
  return (
    <form>
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
        regexs={regexs.fullName}
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
        regexs={regexs.email}
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
          regexs={regexs.phone}
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
        regexs={regexs.address}
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
        regexs={regexs.referencePoint}
      />
    </form>
  );
};
export default CheckoutForm;
