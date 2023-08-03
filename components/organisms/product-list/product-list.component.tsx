import { FC } from "react";
import { ProductListProps } from "../../../interfaces";
import { Product } from "../../../components";
import { ProducListStyled } from "./product-lis.styled";


const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <ProducListStyled>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProducListStyled>
  );
};
export default ProductList;
