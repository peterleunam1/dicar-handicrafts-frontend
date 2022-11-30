import { useEffect, useState, useContext } from "react";
import ContextCart from "../context/CartContext";
import { getQuantity } from "../services/cart/getQuantity";

const useQuantity = () => {
  const [quantity, setQuantity] = useState<number>();
  const {update} = useContext(ContextCart);
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
  }, [update]);

  return {
    quantity
  };
};

export default useQuantity;
