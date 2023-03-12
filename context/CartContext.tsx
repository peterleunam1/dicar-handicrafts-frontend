import React, { useState } from "react";
import {
  CartContextProps,
  IProduct,
  UserContextProviderProps,
} from "../interfaces";

const ContextCart = React.createContext<CartContextProps>({
  setUpdate(value) {},
  setInCart(value) {},
  setCount(value) {},
});

export function CartContextProvider({ children }: UserContextProviderProps) {
  const [update, setUpdate] = useState(false);
  const [inCart, setInCart] = useState<IProduct[]>([]);
  const [count, setCount] = useState(0);
  return (
    <ContextCart.Provider
      value={{
        update,
        setUpdate,
        inCart,
        setInCart,
        count,
        setCount,
      }}
    >
      {children}
    </ContextCart.Provider>
  );
}

export default ContextCart;
