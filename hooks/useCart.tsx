import {useContext, useEffect } from "react";
import ContextCart from "../context/CartContext";

export default function useCart ()  {
    const { setInCart, inCart, setCount,  count, update, setUpdate, setTotalCart, totalCart, setQty, qty } = useContext(ContextCart);
    useEffect(() => {
        const cart = localStorage.getItem("cartDicar");
        if (cart) {
          setInCart(JSON.parse(cart));
          setCount(JSON.parse(cart).length);
        }
      }, [update]);
  return {
    setInCart,
    inCart,
    setCount,
    count,
    update,
    setUpdate,
    setTotalCart,
    totalCart,
    setQty,
    qty
  };
};


