import { useCallback, useEffect, useState } from "react";
import getProductByCatgory from "../services/products/get-product-by-category.service";
import { GetProductByCategoryParams, ProductsModel } from "../interfaces";
import { findItem } from "../utils";

export default function useProducts ({ category, filterById = 0 }: GetProductByCategoryParams) {

  const [products, setProducts] = useState<ProductsModel>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      if (category) {
        const response = await getProductByCatgory({ category });
        setLoading(false);
        return response;
      }
    } catch (error: unknown) {
      setError("An error has ocurred!");
    }
  }, [category]);

  useEffect(() => {
    getProducts().then((response) => {
      if (!response) {
        setError("Products not found!");
      } else {
        setProducts(response);
      }
    });
  }, [category, getProducts]);

  const filteredProduct = findItem({id: filterById, items: products?.data || []});

  return {
    products: products?.data || [],
    filteredProduct,
    loading,
    error
  };
};

