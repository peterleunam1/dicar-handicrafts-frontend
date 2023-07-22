import React, { useState } from "react";
import {
  CartContextProps,
  CartContextProviderProps,
  IProduct,
} from "../interfaces";

const ContextCart = React.createContext<CartContextProps>({
  update: false,
  setUpdate(value) {},
  inCart: [],
  setInCart(value) {},
  count: 0,
  setCount(value) {},
  qty: false,
  setQty(value) {},
});

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [update, setUpdate] = useState(false);
  const [inCart, setInCart] = useState<IProduct[]>([]);
  const [count, setCount] = useState(0);
  const [qty, setQty] = useState(false);
  return (
    <ContextCart.Provider
      value={{
        update,
        setUpdate,
        inCart,
        setInCart,
        count,
        setCount,
        qty, 
        setQty
      }}
    >
      {children}
    </ContextCart.Provider>
  );
}

export default ContextCart;
