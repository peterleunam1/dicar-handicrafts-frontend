import styled from "styled-components";

export const ContainerStyled = styled.div<{
  mb: string;
  borderColor: string;
  bradius?: string;
  isError: boolean;
}>`
  border-radius: ${(props) => props.bradius || ".9375rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: .3125rem .875rem;
  border: .0625rem solid ${(props) => props.borderColor};
  margin-bottom: ${(props) => props.mb};
  width: 90%;
  margin-top: .3125rem;

  ${(props) => props.isError && `border: .0625rem solid rgb(255, 0, 0, 0.5);`}
`;

export const InputStyled = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  font-size: .8125rem;
  color: #606060;
  &::placeholder {
    color: #b8b8b8;
  }
`;

export const LabelInput = styled.label`
  font-size: .8125rem;
  font-weight: 500;
`;

export const ErrorText = styled.small`
  color: red;
  font-size: .75rem;
  margin-top: .75rem;
`;