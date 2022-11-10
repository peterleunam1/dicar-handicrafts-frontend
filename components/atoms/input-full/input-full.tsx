import { FC } from "react";
import styled from "styled-components";
import { InputProps } from "../../../interfaces";

const ContainerStyled = styled.div<{
  px: string;
  py: string;
  mb: string;
  borderColor: string;
  bradius?: string;
}>`
  border-radius: ${(props) => props.bradius || "15px"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.py} ${(props) => props.px};
  border: 1px solid ${(props) => props.borderColor};
  margin-bottom: ${(props) => props.mb};
  width: 90%;
  background-color: #e8e8e8;
  margin-top: 5px;
`;
const InputStyled = styled.input<{ fSize: string }>`
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  font-size: ${(props) => props.fSize};
  color: #606060;
`;
const LabelInput = styled.label`
  font-size: 13px;
  font-weight: 500;
`;
const InputFull: FC<InputProps> = ({
  type,
  px,
  py,
  fSize,
  border_color,
  mb,
  bradius,
  label,
  value,
}) => {
  return (
    <div>
      <LabelInput htmlFor="">{label}</LabelInput>
      <ContainerStyled
        py={py || "3px"}
        px={px || "15px"}
        mb={mb || "0px"}
        bradius={bradius}
        borderColor={border_color || "rgb(202, 199, 199)"}
      >
        <InputStyled fSize={fSize || "13px"} type={type} value={value}readOnly />
      </ContainerStyled>
    </div>
  );
};

export default InputFull;
