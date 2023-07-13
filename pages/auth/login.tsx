import { useState, useContext } from "react";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { AuthBox, AuthLayout, Input, Button } from "../../components";
import { useRouter } from "next/router";
import singIn from "../../services/sign-in";
import Cookies from "js-cookie";
import Loader from "../../components/atoms/loader/loader";

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
const Load = styled.div`
  position: absolute;
  top: 15px;
  left: 57%;
  width: 100px;
  height: 100px;
  z-index: 10;
`;

const Login: NextPage = () => {
  const [auth, setAuth] = useState({});
  const [message, setMessage] = useState("");
  const [visibility, setVisibility] = useState("hidden");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    }); 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setMessage("empty");
      const result = await singIn(auth);
      if (result.status === 200) {
        const { data, token } = result;
        window.localStorage.setItem("userAuth", JSON.stringify(data));
        Cookies.set("token", token);
        router.push("/");
      } else {
        setVisibility("visible");
        setMessage("Correo electrónico o contraseña incorrecto");
      }
    } catch (error: any) { }
  };
  
  return (
    <AuthLayout title="Inicio de sesión">
      {message !== "empty" ? (
        <p>error al iniciar sesión</p>
      ) : (
        <Load>
          <Loader />
        </Load>
      )}{" "}
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
            <Button
              text="Ingresar"
              bg="#f6d1bc"
              hover="rgba(246, 209, 188, 0.637)"
            />
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
