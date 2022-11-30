import { NextPage } from "next";
import styled from "styled-components";
import { RowList, ShopLayout } from "../../components";

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
`;
const Tbody = styled.tbody`
  width: 100%;
`;
const TheadStyled = styled.thead`
  width: 100%;
  height: 42px;
`;
const TheadContent = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  color: #6b6b6b;
`;
const ContentRight = styled.th<{ background: string; radius?: string }>`
  height: 100%;
  width: 51%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.background};
  margin-right: 7px;
`;
const ContentLeft = styled.th<{background: string; radius?: string}>`
  width: 12%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  margin-right: 7px;
  border-radius: ${(props) => props.radius};
  padding: 2px 4px 0px;
  &:last-child {
    margin-right: 0px;
  }
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
`;

const ListaDeseos: NextPage = () => {
  return (
    <ShopLayout
      title="Mis Deseos"
      descriptionPage="Productos de mi selección como deseos y articulos opcionales"
    >
      <h2>Lista de deseos</h2>
      <Table>
        <TheadStyled>
          <TheadContent>
            <ContentRight background="#f8f8f8" radius="6px 6px 0px 0px">
              Descripción
            </ContentRight>

            <ContentLeft background="#fff9f7" radius="6px 6px 0px 0px">
              <Title>Nombre</Title>
            </ContentLeft>

            <ContentLeft background="#fff3ee" radius=" 6px 6px 0px 0px">
              <Title>Precio</Title>
            </ContentLeft>

            <ContentLeft background="#fff9f7" radius=" 6px 6px 0px 0px">
              <Title>Tipo</Title>
            </ContentLeft>
            <ContentLeft background="#fff3ee" radius=" 6px 6px 0px 0px">
              <Title>Opciones</Title>
            </ContentLeft>
          </TheadContent>
        </TheadStyled>
        <Tbody>
          <RowList></RowList>
          <RowList></RowList>
        </Tbody>
      </Table>
    </ShopLayout>
  );
};
export default ListaDeseos;
