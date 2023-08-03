import { FC, useState } from "react";
import { InputProps } from "../../../interfaces";
import {
  LabelInput,
  ContainerStyled,
  InputStyled,
  ErrorText,
} from "./input.styled";

const Input: FC<InputProps> = ({
  onChange,
  type,
  placeholder,
  name,
  border_color,
  mb,
  bradius,
  label,
  regexs,
}) => {
  const [isError, setIsError] = useState(false);

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (regexs?.regex.test(e.target.value)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <div>
      <LabelInput htmlFor="">{label}</LabelInput>
      <ContainerStyled
        mb={mb || "0"}
        bradius={bradius}
        borderColor={border_color || "rgb(202, 199, 199)"}
        isError={isError}
      >
        <InputStyled
          pattern={regexs?.regex.toString() || ""}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          name={name}
          required
          onBlur={handleBlur}
        />
        {isError && <ErrorText>{regexs?.message}</ErrorText>}
      </ContainerStyled>
    </div>
  );
};
export default Input;
