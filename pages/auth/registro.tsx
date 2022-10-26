import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { useStyleRegistry } from "styled-jsx";
import { AuthBox, AuthLayout, Input, Button } from "../../components";

const Container = styled.div`
  height: 75%;
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ButtonContainer = styled.div`
  width: 50%;
  margin-bottom: 62px;
`;
const Form = styled.form`
  width: 100%;
`;

const Registro: NextPage = () => {
  const [page, setPage] = useState(false);
  const [user, setUser] = useState({})
    const [array, setArray] = useState([])
    let users:any = []

    const setUsuarios = () => {
        localStorage.setItem('user', JSON.stringify(users))
    }
    const getUsuarios = () => {
        if (window){
            let local = window.localStorage.getItem("user");
            return local
        }
    }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  
  };
//   const {password, passwordConfirm, names,lastName, doc, phone, email, adress} = user as any 
const {password, passwordConfirm} = user as any 


  console.log(password, passwordConfirm)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       if(password !== passwordConfirm){
            alert("Las contraseñas deben coincidir")
       } 
    //    users = getUsuarios()
    //    users.push(user)
    //    setUsuarios()
    let value
    if (typeof window !== 'undefined') {
        localStorage.setItem("user",  JSON.stringify(user) )
        value = window.localStorage.getItem('user')
    }
    users.push(value)
    localStorage.setItem("user",  JSON.stringify(users) )
  }

  

  return (
    <AuthLayout title="Registro">
      <Form onSubmit={handleSubmit}>
        <AuthBox
          title="Crear Cuenta"
          arrow_s="block"
          box_display={page ? "none" : "block"}
          onClick={() => setPage(true)}
        >
          <Container>
            <Input
              type="text"
              placeholder="Nombres"
              name="names"
              py="10px"
              mb="15px"
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Apellidos"
              name="lastName"
              py="10px"
              mb="15px"
              onChange={handleChange}
            />
            <Input
              type="number"
              placeholder="Documento de indentidad"
              name="doc"
              py="10px"
              mb="15px"
              onChange={handleChange}
            />
            <Input
              type="number"
              placeholder="Teléfono celular"
              name="phone"
              py="10px"
              mb="15px"
              onChange={handleChange}
            />
          </Container>
        </AuthBox>
        <AuthBox
          title="Un paso más ..."
          arrow_a="block"
          box_display={page ? "block" : "none"}
          onClick={() => setPage(false)}
        >
          <Container>
            <Input
              type="text"
              placeholder="Correo electrónico"
              name="email"
              py="10px"
              mb="15px"
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              name="password"
              py="10px"
              mb="15px"
              onChange={handleChange}

            />
            <Input
              type="password"
              placeholder="Confirme su contraseña"
              name="passwordConfirm"
              py="10px"
              mb="15px"
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Dirección"
              name="adress"
              py="10px"
              mb="30px"
              onChange={handleChange}
            />
            <ButtonContainer onClick={()=> handleSubmit}>
              <Button
                text="Registrarse"
                bg="#f6d1bc"
                hover="rgba(246, 209, 188, 0.637)"
              />
            </ButtonContainer>
            <p>
              ¿Ya tienes una cuenta? 
              <Link href="/auth/login"> Inicia sesión</Link>
            </p>
          </Container>
        </AuthBox>
      </Form>
    </AuthLayout>
  );
};
export default Registro;
