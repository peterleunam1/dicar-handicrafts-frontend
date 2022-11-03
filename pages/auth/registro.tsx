import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { AuthBox, AuthLayout, Input, Button, Select } from "../../components";
import addUser from "../../services/register";

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
  const [confirm, setConfirm] = useState("")
  const router = useRouter()


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const ConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
    // await  setConfirm( e.target.value)
    // confirm !== password ? alert("Las contraseñas deben ser iguales") : ""
  }

 
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = await addUser(user).then(()=>{
          console.log(result)
        })
        router.push('/auth/login')
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
              name="firstname"
              py="10px"
              mb="15px"
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Apellidos"
              name="lastname"
              py="10px"
              mb="15px"
              onChange={handleChange}
            />
            <Input
              type="number"
              placeholder="Documento de indentidad"
              name="document"
              py="10px"
              mb="15px"
              onChange={handleChange}
            />
            <Input
              type="number"
              placeholder="Teléfono celular"
              name="phone_number"
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
              onChange={ConfirmPassword}
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
