import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { Button, CardLarge, Icon, Modal, ShopLayout } from "../../components";
import { useContext, useEffect, useState } from "react";
import useAdress from "../../hooks/useAdress";
import Loader from "../../components/atoms/loader/loader";
import ContextAdress from "../../context/AddressContext";
import { DataAddress } from "../../interfaces";
import deleteAddress from "../../services/address/deleteAddress";

const Container = styled.section`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  h5 {
    margin-top: 20px;
  }
`;
const BoldText = styled.strong`
  font-weight: 600;
  font-size: 17px;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1.5px solid #e8e8e8;
`;
const Span = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;
const InputRadio = styled.input`
  cursor: pointer;
  position: relative;
`;
const ButtonC = styled.div<{ margin?: string; width?: string }>`
  width: ${(props) => props.width || "40%"};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${(props) => props.margin || "0px"};
`;

const SeleccionaDomicio: NextPage = () => {
  const { data, loading } = useAdress();
  const { data: adrresses, status } = data as any;
  const { setAddress, setCity, setDepartment, setUpdate} = useContext(ContextAdress);
  const [id, setId] = useState(0)
  const [modal, setModal] = useState(false);

  return (
    <ShopLayout
      title="Selecciona dirección"
      descriptionPage="Elige una de las direcciones registradas"
    >
      <Container>
        <Header>
          <h2>¿Donde quieres recibir tu compra?</h2>
          <Link href="/direccion/agregar-domicilio">
            <ButtonC width="22%">
              <Button
                text="Registrar dirección"
                hover="#f6d1bc"
                bg="rgba(246, 209, 188, 0.637)"
              />
            </ButtonC>
          </Link>
        </Header>
        {status !== 401 ? (
          <div>
            {loading ? (
              <Loader />
            ) : adrresses ? (
              adrresses?.map((elemenent: DataAddress) => {
                return (
                  <CardLarge height="100px" width="70%" key={elemenent.id}>
                    <Icon
                      fill="fa-solid fa-location-dot"
                      size="35px"
                      margin="0px"
                      color="#f6d1bc"
                    />
                    <div>
                      <BoldText>{elemenent.address}</BoldText>
                      <p>
                        {`${elemenent.city_name}, ${elemenent.department_name}`}
                      </p>
                    </div>
                    <Span>
                      <p>seleccioname</p>
                      <InputRadio
                        type="radio"
                        name="adreess"
                        value={elemenent.address}
                        onClick={() => {
                          setAddress(elemenent.address);
                          setCity(elemenent.city_name);
                          setDepartment(elemenent.department_name);
                        }}
                      />
                    </Span>
                    <div onClick={()=> {
                      setModal(true)
                      setId(elemenent.id)
                    }}>
                      <Icon fill="fa-regular fa-trash-can" hover="#ff0000" />
                    </div>
                  </CardLarge>
                );
              })
            ) : (
              <p>Notiene direcciones registradas</p>
            )}
          </div>
        ) : (
          <p>
            Su token ha expirado, por favor <strong>incie sesión </strong>
            nuevamente.
          </p>
        )}
        <Link href="/checkout/confirma-datos">
          <ButtonC margin="30px">
            <Button
              text="Confirmar"
              bg="#f6d1bc"
              hover="rgba(246, 209, 188, 0.637)"
            />
          </ButtonC>
        </Link>
        <Modal setStatus={setModal} status={modal} width="28%" height="26vh">
          <Icon fill="fa-regular fa-trash-can" hover="#ff0000" />
          <h5>¿Desea eliminar la dirección de manera permanente?</h5>
          <ButtonC margin="20px" onClick={async() => {
             const result = await deleteAddress({
              id: id
             })
            console.log(result)
            setUpdate(true)
            setModal(false)
          }}>
            <Button
              text="Confirmar"
              bg="#f6d1bc"
              hover="rgba(246, 209, 188, 0.637)"
            />
          </ButtonC>
        </Modal>
      </Container>
    </ShopLayout>
  );
};
export default SeleccionaDomicio;
