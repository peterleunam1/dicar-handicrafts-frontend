import React, { useState } from "react";
import {
  CartContextProps,
  CartContextProviderProps,
  IProduct,
  UserContextProviderProps,
} from "../interfaces";

const ContextCart = React.createContext<CartContextProps>({
  setUpdate(value) {},
  setInCart(value) {},
  setCount(value) {},
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
