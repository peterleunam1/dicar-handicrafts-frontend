import { useEffect, useState } from "react";
import getProductByCatgory from "../services/products/getProductByCategory";

const useProducts = (category: any) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getProductByCatgory(category || "").then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [category]);

  return {
    products,
    loading,
  };
};

export default useProducts;
