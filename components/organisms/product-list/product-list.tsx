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
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(currentCart);
  }, []);

  const handleSaveOnCart = (product: IProduct) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      // productInCart.qty! += 1;
      setCart([...cart, { ...productInCart }]);
      window.localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...productInCart }])
      );
    } else {
      // setCart([...cart, { ...product, qty: 1 }]);
      const productsInCart = [...cart, { ...product, qty: 1 }];
      window.localStorage.setItem("cart", JSON.stringify(productsInCart));
    }
  };

  return (
    <ProducListStyled>
      {products.map((product, index = 0) => (
        <Product
          key={product.id}
          product={product}
          setInCart={handleSaveOnCart}
        />
      ))}
    </ProducListStyled>
  );
};
export default ProductList;
