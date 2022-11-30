import { useEffect, useState } from "react";
import { getQuantity } from "../services/cart/getQuantity";

const useQuantity = () => {
  const [quantity, setQuantity] = useState<number>();

  useEffect(() => {
    getQuantity().then((data) => {
      if (data.status === 200) {
        setQuantity(data.data);
      }
      else {
        setQuantity(0);
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return {
    quantity
  };
};

export default useQuantity;
