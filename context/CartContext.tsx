import { createContext } from "react";
import { CartContextParams, CartContextProviderProps } from "../interfaces";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext<CartContextParams>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
  removeItem: () => {},
  substractCounterFromCart: () => {},
  updateProductSize: () => {},
});

export function CartContextProvider({ children }: CartContextProviderProps) {
  const { state, addToCart, clearCart, removeItem, substractCounterFromCart, updateProductSize } =
    useCartReducer();
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeItem,
        substractCounterFromCart,
        updateProductSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
