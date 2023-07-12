import { useState } from "react";
import { IProduct } from "../interfaces";
import useCart from "./useCart";

export default function useAddToCart(product: IProduct) {
  const { inCart, setInCart, setUpdate, update } = useCart();
  const [modal, setModal] = useState(false);

  const handleConfirmCart = () => {
    if (inCart?.find((item) => item.id === product.id)) {
      alert("Este producto ya se encuentra en el carrito");
    } else {
      if (inCart) {
        setInCart([...inCart, product]);
        localStorage.setItem(
          "cartDicar",
          JSON.stringify([
            ...inCart,
            {
              ...product,
              quantity: 1,
            },
          ])
        );
        setUpdate(!update);
      } else {
        setInCart([product]);
      }
    }
  };

  return {
    handleConfirmCart,
    modal,
    setModal,
  };
}
