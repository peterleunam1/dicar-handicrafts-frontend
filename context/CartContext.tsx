import React, { useState } from "react";
import { CartContextProps, UserContextProviderProps } from "../interfaces";

const ContextCart = React.createContext<CartContextProps>({
  setUpdate(value) {},

});

export function CartContextProvider({ children }: UserContextProviderProps) {

  const [update, setUpdate] = useState(false);


  return (
    <ContextCart.Provider
      value={{
        update,
        setUpdate
      }}
    >
      {children}
    </ContextCart.Provider>
  );
}

export default ContextCart;
