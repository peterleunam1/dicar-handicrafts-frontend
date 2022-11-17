import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { AdminLayout, Input, Select, ShopLayout, Button, Modal } from "../../components";
import { EmptyObject, toSubcategories } from "../../helpers";
import useUser from "../../hooks/useUser";
import addProduct from "../../services/products/addproduct";

const Main = styled.div`
  width: 75%;
  padding: 40px 120px;
`;
const Title = styled.strong`
  margin-bottom: 30px;
`;

const Header = styled.header`
  width: 90.5%;
  background-color: #fff2eb;
  padding: 17px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 98.7%;
`;
const Form = styled.form`
  margin-top: 20px;
`;
const Textarea = styled.textarea`
  width: 90%;
  height: 100px;
  resize: none;
  border: 1px solid rgb(202, 199, 199);
  border-radius: 5px;
  padding: 15px;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`;
const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
`;
const ButtonContainer = styled.div`
  width: 50%;
  margin-top: 30px;
`;

const Categories = [
  {
    id: 1,
    name: "Mochilas",
  },
  {
    id: 2,
    name: "Sandalias",
  },
  {
    id: 3,
    name: "Sombreros",
  },
  {
    id: 4,
    name: "Accesorios",
  },
];

const HomeAdmin: NextPage = () => {

  const { user } = useUser();
  const [modal, setModal] = useState(false)
  const [category, setCategory] = useState("")
  const [typeProduct, setTypeProduct] = useState("")
  const [product, setAddProduct] = useState({})
  const [description, setDescription] = useState("")
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeProduct(e.target.value);
  };
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddProduct({
      ...product,
      "category": category,
      type: typeProduct,
      description: description,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      try{    
        e.preventDefault();
       const {status} =  addProduct(product) as any
       if (status === 201 || status === 200 || status === 204) {
        alert("producto agregado con éxito")
       }
    }catch(err){
      console.log(err)
    }
  };
 const options =toSubcategories(category.toLowerCase())
  return (
    <>
      {EmptyObject(user) || user.rol_id === 4 ? (
        <ShopLayout title="Error" descriptionPage="">
          No tienes permiso, dele pa' fuera mi loco
        </ShopLayout>
      ) : (
        <AdminLayout title="Admin">
          <Main>
            <Header>
              ¡Bienvenido admin <strong>{user.firstname}</strong>!
            </Header>
            <Title>Agregar producto a la base de datos</Title>
            <Form action="" onSubmit={handleSubmit}>
              <Wrapper>
                <Select
                  array={Categories}
                  arg="name"
                  label="Seleccione una categoria"
                  onChange={handleCategory}
                />
              </Wrapper>
              <Wrapper>
                <Select
                  array={options || []}
                  arg="name"
                  label="Seleccione un tipo"
                  onChange={handleType}
                />
              </Wrapper>
              <Input
                type="text"
                label="Nombre"
                placeholder="Digite nombre del producto"
                bradius="5px"
                fSize="15px"
                py="7px"
                mb="15px"
                name="name"
                onChange={handleChange}
              />
              <Label htmlFor="">Descripcion</Label>
              <Textarea
                name=""
                id=""
                autoComplete="off"
                placeholder="Digite una breve descripción del producto"
                required
                onChange={handleDescription}
              ></Textarea>

              <Input
                type="number"
                label="Unidades disponibles"
                placeholder="Ingrese un valor"
                bradius="5px"
                fSize="15px"
                py="7px"
                mb="10px"
                name="qty_in_stock"
                onChange={handleChange}
              />

              <Input
                type="text"
                label="Imagen"
                placeholder="Copie enlace aquí"
                bradius="5px"
                fSize="15px"
                py="7px"
                mb="10px"
                name="image"
                onChange={handleChange}
              />

              <Input
                type="text"
                label="Precio"
                placeholder="Digite el precio del producto"
                bradius="5px"
                fSize="15px"
                py="7px"
                mb="10px"
                name="price"
                onChange={handleChange}
              />
                 <ButtonContainer onClick={()=>handleSubmit}>
            <Button
              text="Ingresar"
              bg="#f6d1bc"
              hover="rgba(246, 209, 188, 0.637)"
            />
          </ButtonContainer>
            </Form>
          </Main>
        </AdminLayout>
      )}
    </>
  );
};
export default HomeAdmin;
