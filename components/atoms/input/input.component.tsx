import { FC, useState } from "react";
import styled from "styled-components";
import { InputProps } from "../../../interfaces";
import { RegexsModel } from "../../../interfaces/constants/regexs";

const ContainerStyled = styled.div<{
  mb: string;
  borderColor: string;
  bradius?: string;
  isError: boolean;
}>`
  border-radius: ${(props) => props.bradius || "15px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px 14px;
  border: 1px solid ${(props) => props.borderColor};
  margin-bottom: ${(props) => props.mb};
  width: 90%;
  margin-top: 5px;

  ${(props) => props.isError && `border: 1px solid rgb(255, 0, 0, 0.5);`}
`;
const InputStyled = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  font-size: 13px;
  color: #606060;
  &::placeholder {
    color: #b8b8b8;
  }
`;
const LabelInput = styled.label`
  font-size: 13px;
  font-weight: 500;
`;
const ErrorText = styled.small`
  color: red;
  font-size: 12px;
  margin-top: 12px;
`;
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
  const { regex, message } = regexs as RegexsModel;

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (regex.test(e.target.value)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  
  return (
    <div>
      <LabelInput htmlFor="">{label}</LabelInput>
      <ContainerStyled
        mb={mb || "0px"}
        bradius={bradius}
        borderColor={border_color || "rgb(202, 199, 199)"}
        isError={isError}
      >
        <InputStyled
          pattern={regex && regex.toString()}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          name={name}
          required
          onBlur={handleBlur}
        />
        {isError && <ErrorText>{message}</ErrorText>}
      </ContainerStyled>
    </div>
  );
};
export default Input;
