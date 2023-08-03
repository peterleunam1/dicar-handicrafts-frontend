import { FC, useState } from "react";
import { regexs } from "../../../constants";
import { AddressCheckoutModel, CheckoutFormProps } from "../../../interfaces";
import { getSortedArray } from "../../../utils";
import { useDepartments, useMunicipalities } from "../../../hooks";
import { Input, Select, Button } from "../../../components";
import {
  ButtonContainer,
  HalfInput,
  InLineInput,
  LabelInput,
  SelectStyled,
  TitleSection,
} from "./checkout-form.styled";

const CheckoutForm: FC<CheckoutFormProps> = ({
  data,
  setData,
  handleClick,
}) => {
  
  const [address, setAddress] = useState<AddressCheckoutModel>({});
  const { departments, error: err } = useDepartments();
  const { municipalities: cities, error } = useMunicipalities({
    department: address.Departamento,
  });
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const departmentsSorted = getSortedArray({
    array: departments || [],
    key: "departamento",
  });

  return (
    <form onSubmit={handleSubmit}>
      <TitleSection>Datos de usuario</TitleSection>
      <Input
        type="text"
        bradius=".3125rem"
        label="Nombre completo"
        mb=".625rem"
        placeholder="ej: Juan Perez Lorem"
        onChange={handleChange}
        name="*👤 Nombre*"
        regexs={regexs.fullName}
      />
      <Input
        type="email"
        bradius=".3125rem"
        label="Email"
        mb=".625rem"
        placeholder="usuario@lorem.com"
        onChange={handleChange}
        name="*📨 Correo electrónico*"
        regexs={regexs.email}
      />
      <HalfInput>
        <Input
          type="number"
          bradius=".3125rem"
          label="Celular"
          mb=".625rem"
          placeholder="ej: +57 307 6784509"
          onChange={handleChange}
          name="*📲 Telefono*"
          regexs={regexs.phone}
        />
      </HalfInput>
      <TitleSection>Datos de envío</TitleSection>
      <Input
        type="text"
        bradius=".3125rem"
        label="Dirección"
        mb=".625rem"
        placeholder="ej: Centro, Getsemaní, Calle de las Maravillas No. 30-45"
        onChange={handleChange}
        name="*📍➡️ Dirección*"
        regexs={regexs.address}
      />
      <InLineInput>
        <HalfInput>
          {err && <p>cargando...</p>}
          <Select
            array={departmentsSorted}
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
        bradius=".3125rem"
        mb=".625rem"
        name="*🗒️ Datos de guía*"
        onChange={handleChange}
        regexs={regexs.referencePoint}
      />
      <ButtonContainer>
        <Button
          text="Continuar"
          bg="#f6d1bc"
          hover="rgba(246, 209, 188, 0.637)"
          mt="1.5625rem"
          mb=".625rem"
          onClick={() => handleClick()}
        />
      </ButtonContainer>
    </form>
  );
};
export default CheckoutForm;
