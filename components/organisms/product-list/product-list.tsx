import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { IProduct, ProductListProps } from "../../../interfaces";
import Product from "../../molecules/product/product";

const ProducListStyled = styled.section`
  margin: 22px auto 0px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProductList: FC<ProductListProps> = ({ products }) => {

  return (
    <ProducListStyled>
      {products?.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </ProducListStyled>
  );
};
export default ProductList;
