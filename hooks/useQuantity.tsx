import { useEffect, useState } from "react";
import { getQuantity } from "../services/cart/getQuantity";

const useProducts = () => {
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    getQuantity().then((data) => {
      setQuantity(data);
    });
  }, []);

  return {
    quantity
  };
};

export default useProducts;
