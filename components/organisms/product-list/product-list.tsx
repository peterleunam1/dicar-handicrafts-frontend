import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { IProduct, ProductListProps } from "../../../interfaces";
import Product from "../../molecules/product/product";


const ProducListStyled = styled.section`
  
  margin: 22px auto 0px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
`;

const ProductList: FC<ProductListProps> = ({ products }) => {
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(() => {
        const currentCart = JSON.parse(localStorage.getItem('cart') || "[]");
        setCart(currentCart);
    }, []);

    const handleSaveOnCart = (product: IProduct) => {
        setCart([...cart, product]);
        const productsInCart = [...cart, product];
        window.localStorage.setItem('cart', JSON.stringify(productsInCart));
    };

    return (
        <ProducListStyled>
            {
                products.map((product, index = 0) => (
                    <Product key={product.id} product={product} setInCart={handleSaveOnCart} />
                ))
            }
        </ProducListStyled>
    )
}
export default ProductList