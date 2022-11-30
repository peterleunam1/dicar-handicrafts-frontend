import { ShopLayout } from "../../components"
import styled from "styled-components";
import Image from "next/image";

const CongratulationsPageStyled = styled.div`
  text-align: center;
`;

const CongratulationsPage = () => {
  return (
    <ShopLayout title="Pago realizado con exito!" descriptionPage="El pago fue hecho con exito, gracias por preferirnos!">
      <CongratulationsPageStyled>
        <h1>Pago realizado exitosamente!</h1>
        <Image src={"https://media.tenor.com/AgeYHBN9m9EAAAAC/perro-brazil.gif"} alt="Perrito bailando" width="200px" height="200px"></Image>
      </CongratulationsPageStyled>
    </ShopLayout>
  )
}

export default CongratulationsPage;