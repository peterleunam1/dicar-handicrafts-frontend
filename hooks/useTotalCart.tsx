import { useEffect, useState } from "react";
import useCart from "./useCart";

export default function useTotalCart() {
  const { inCart, update, qty } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    inCart?.forEach((item) => {
      total = total + item.price * (item.quantity || 1);
    });
    setTotal(total);
  }, [update, qty, inCart]);

  return { total};
}
