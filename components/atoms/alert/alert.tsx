import { FC } from "react";
import styled from "styled-components";
import { AlertProps } from "../../../interfaces";

const AlertStyled = styled.article<{bg:string, color:string, visibility:string}>`
  top: 20px;
  left: 27%;
  position: absolute;
  width: 45%;
  background-color: ${(props) => props.bg};
  padding: 10px 0px;
  text-align: center;
  border-radius: 5px;
  visibility: ${(props) => props.visibility};
  p{
    color: ${(props)=> props.color};
  }
`;

const Alert: FC<AlertProps> = ({type, message, visibility}) => {
    let bground
    type === "success" ? bground="green" : bground = "#ee6b6e"
  return (
    <AlertStyled bg={bground} color={"#fff"} visibility={visibility}>
      <p>{message}</p>
    </AlertStyled>
  );
};
export default Alert;
