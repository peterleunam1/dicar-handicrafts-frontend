import { FC } from "react";
import styled from "styled-components";
import { ProductListProps } from "../../../interfaces";
import Product from "../../molecules/product/product";


const ProducListStyled = styled.section`
      /* width: 90%;
	margin: 25px auto 100px auto;
    	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 40px;
    background-color: lightblue; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 48.5px;
    margin-top: 22px;
`;

const ProductList: FC<ProductListProps> = ({ products }) => {

    console.log(products);
    return (
        <ProducListStyled>
            {
                products.map(product => (
                    <Product key={product.id} {...product} />
                ))
            }
        </ProducListStyled>
    )
}
export default ProductList