import { FC } from "react";
import styled from "styled-components";
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

const ProductList:FC = () => {
    return(
         <ProducListStyled>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </ProducListStyled>
    )
}
export default ProductList