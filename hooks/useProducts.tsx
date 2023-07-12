import { useEffect, useState } from "react";
import getProductByCatgory from "../services/products/getProductByCategory";
import { useRouter } from "next/router";
import { IProduct } from "../interfaces";

const useProducts = (type:string) => {
  // const { type: category } = useRouter().query as { type: string };
  const [products, setProducts] = useState<IProduct[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductByCatgory(type).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [type]);

  return {
    products,
    loading,
  };
};

export default useProducts;
