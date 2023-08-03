import { FC } from "react";
import { toCapitalize } from "../../../utils";
import { SelectProps } from "../../../interfaces";
import { LabelInput, SelectStyled } from "./select.styled";

const Select: FC<SelectProps> = ({ onChange, array, name, arg, label }) => {
  array.sort();
  return (
    <>
      <LabelInput htmlFor="">{label}</LabelInput>
      <SelectStyled name={name} onChange={onChange} defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Seleccione
        </option>
        {array?.map((element, index) => {
          return (
            <option value={element[`${arg}`]} key={index}>
              {toCapitalize(element[`${arg}`])}
            </option>
          );
        })}
      </SelectStyled>
    </>
  );
};
export default Select;
