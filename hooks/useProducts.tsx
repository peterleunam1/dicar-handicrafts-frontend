import { useCallback, useEffect, useState } from "react";
import getProductByCatgory from "../services/products/getProductByCategory";
import { IProduct } from "../interfaces";

const useProducts = (category: string) => {
  const [products, setProducts] = useState<IProduct[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      if (category) {
        const response = await getProductByCatgory(category);
        setLoading(false);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, [category, getProducts]);

  return {
    products,
    loading,
  };
};

export default useProducts;
