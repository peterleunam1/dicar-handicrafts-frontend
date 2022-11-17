import { useEffect, useState } from "react";
import getProductByCatgory from "../services/products/getProductByCategory";

const useProducts = (category: any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByCatgory(category || "").then((data) => {
      setProducts(data);
    });
  }, []);

  return {
    products
  };
};

export default useProducts;
