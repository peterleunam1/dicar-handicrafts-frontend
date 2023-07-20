import { useEffect, useState } from "react";
import useCart from "./useCart";
import { UsePricePerQtyProps } from "../interfaces";

export default function usePricePerQty({ id, price }: UsePricePerQtyProps) {

  const { inCart, setUpdate, update, setQty, qty } = useCart();
  const [priceWithCounter, setPriceWithCounter] = useState(0);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setPriceWithCounter(price! * counter);
    setUpdate(!update);
    setQty(!qty);
  }, [counter, price, update, qty, setQty, setUpdate]);

  useEffect(() => {
    const newProductWithQty = inCart?.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: counter };
      }
      return item;
    });
    localStorage.setItem("cartDicar", JSON.stringify(newProductWithQty));
  }, [counter, inCart, id]);

  return { priceWithCounter, counter, setCounter };
}
