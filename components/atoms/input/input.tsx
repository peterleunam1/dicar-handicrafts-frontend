import { FC } from "react";
import styled from "styled-components";
import { InputProps } from "../../../interfaces";

const ContainerStyled = styled.div<{px:string, py:string, mb:string, borderColor:string}>`
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.py} ${(props) => props.px};
    border: 1px solid ${(props) => props.borderColor};
    margin-bottom: ${(props) => props.mb};
    width: 90%;
`;
const InputStyled = styled.input<{fSize: string}>`
    background-color: transparent;
    border: none;
    width: 100%;
    outline: none;
    font-size:${(props) => props.fSize};
    color: #606060;
`;
const Input:FC<InputProps>= ({onChange, type, placeholder, name, px, py, fSize, border_color, mb}) => {
    return(
        <ContainerStyled py={py || "3px"} px={px || "15px"} mb={mb|| "0px"} borderColor={border_color || "rgb(202, 199, 199)"}> 
            <InputStyled fSize={fSize || "13px"} onChange={onChange} className="input__form" type={type} placeholder={placeholder} name={name}/>
        </ContainerStyled>
    )
}
export default Input