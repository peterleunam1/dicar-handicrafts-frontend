import { FC } from "react";
import styled from "styled-components";
import { ProductListProps } from "../../../interfaces";
import Product from "../../molecules/product/product";


const ProducListStyled = styled.section`
  
  margin: 22px auto 0px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
`;

const ProductList: FC<ProductListProps> = ({ products}) => {
;
    return (
        <ProducListStyled>
            {
                products.map((product, index=0) => (
                    <Product key={product.id} {...product}/>
                ))
            }
        </ProducListStyled>
    )
}
export default ProductList