import { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { AuthBox, AuthLayout, Input, Button } from "../../components";

const FormContainer = styled.form`
  height: 75%;
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ButtonContainer = styled.div`
  width: 50%;
`;

const Login: NextPage = () => {
    const [auth, setAuth] = useState({})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuth({
          ...auth,
          [e.target.name]: e.target.value,
        });
      
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        let value
        if (typeof window !== 'undefined') {
            value = JSON.parse(window.localStorage.getItem('user')|| "" )
        }
        
    }

  return (
    <AuthLayout title="Inicio de sesión">
      <AuthBox title="Inicio de sesión">
        <FormContainer onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Ingrese correo electrónico"
            name="email"
            py="10px"
            mb="15px"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            py="10px"
            mb="45px"
            onChange={handleChange}
          />
          <ButtonContainer>
            <Button text="Ingresar" bg="#f6d1bc" hover="rgba(246, 209, 188, 0.637)"/>
          </ButtonContainer>
        </FormContainer>
        <p>
          ¿Todavía no tienes una cuenta?
          <Link href="/auth/registro">Registrarse</Link>
        </p>
      </AuthBox>
    </AuthLayout>
  );
};
export default Login;
