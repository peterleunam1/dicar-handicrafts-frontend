import { FC } from "react";
import styled from "styled-components";
import { SelectProps } from "../../../interfaces";

const SelectStyled = styled.select`
  width: 95.5%;
  margin-top: 10px;
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

const Select: FC<SelectProps> = ({ onChange, array, name, arg, label }) => {
  array = array.sort();
  return (
    <>
      <LabelInput htmlFor="">{label}</LabelInput>
      <SelectStyled name={name} onChange={onChange} defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Seleccione
        </option>
        {array.map((element) => {
          return (
            <option value={element[`${arg}`]} key={element.id}>
              {element[`${arg}`]}
            </option>
          );
        })}
      </SelectStyled>
    </>
  );
};
export default Select;
