import { FC } from "react";
import styled from "styled-components";
import Input from "../../atoms/input/input.component";
import { regexs } from "../../../constants";
import Select from "../../atoms/select/select.component";
import { returnedDepartments } from "../../../interfaces/services/address/get-state";
import { CheckoutFormProps, ReturnedMunicipality } from "../../../interfaces";
import { sortArray } from "../../../helpers";
import Button from "../../atoms/button/button.component";

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
  margin: 15px 0;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
`;
const SelectStyled = styled.select`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 33px;
  border-radius: 5px;
  color: #606066;
  border: 1px solid rgb(202, 199, 199);
  padding-left: 15px;
  position: relative;
`;
const LabelInput = styled.label`
  font-size: 13px;
  font-weight: 500;
  position: relative;
  small {
    position: absolute;
    bottom: -30px;
    right: 0;
    color: red;
  }
`;
const ButtonContainer = styled.div`
  width: 25%;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 10px;
  }
`;


const CheckoutForm: FC<CheckoutFormProps> = ({
  handleChange,
  handleSelect,
  handleSubmit,
  handleClick,
  states,
  cities,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TitleSection>Datos de usuario</TitleSection>
      <Input
        type="text"
        bradius="5px"
        label="Nombre completo"
        mb="10px"
        placeholder="ej: Juan Perez Lorem"
        onChange={handleChange}
        name="*👤 Nombre*"
        regexs={regexs.fullName}
      />
      <Input
        type="email"
        bradius="5px"
        label="Email"
        mb="10px"
        placeholder="usuario@lorem.com"
        onChange={handleChange}
        name="*📨 Correo electrónico*"
        regexs={regexs.email}
      />
      <HalfInput>
        <Input
          type="number"
          bradius="5px"
          label="Celular"
          mb="10px"
          placeholder="ej: +57 307 6784509"
          onChange={handleChange}
          name="*📲 Telefono*"
          regexs={regexs.phone}
        />
      </HalfInput>
      <TitleSection>Datos de envío</TitleSection>
      <Input
        type="text"
        bradius="5px"
        label="Dirección"
        mb="10px"
        placeholder="ej: Centro, Getsemaní, Calle de las Maravillas No. 30-45"
        onChange={handleChange}
        name="*📍➡️ Dirección*"
        regexs={regexs.address}
      />
      <InLineInput>
        <HalfInput>
          <Select
            array={sortArray(states, "departamento")}
            name="Departamento"
            arg="departamento"
            label="Seleccione un departamento"
            onChange={handleSelect}
          />
        </HalfInput>
        <HalfInput>
          <LabelInput>
            Seleccione ciudad o municipio
            <SelectStyled
              onChange={handleSelect}
              disabled={error ? true : false}
              name="Municipio"
            >
              <option value="">Seleccione un municipio</option>
              {cities &&
                Object.entries(cities).map((city, index) => (
                  <option key={index} value={city[1].municipio}>
                    {city[1].municipio}
                  </option>
                ))}
            </SelectStyled>
            <small>{error && "Por favor elija un departamento antes"}</small>
          </LabelInput>
        </HalfInput>
      </InLineInput>
      <Input
        type="text"
        label="Punto de referencia"
        placeholder="Ingrese guía"
        bradius="5px"
        mb="10px"
        name="*🗒️ Datos de guía*"
        onChange={handleChange}
        regexs={regexs.referencePoint}
      />
      <ButtonContainer>
        <Button
          text="Continuar"
          bg="#f6d1bc"
          hover="rgba(246, 209, 188, 0.637)"
          mt="25px"
          mb="10px"
          onClick={() => {
            handleClick();
          }}
        />
      </ButtonContainer>
    </form>
  );
};
export default CheckoutForm;
