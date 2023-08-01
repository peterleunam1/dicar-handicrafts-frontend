import { useEffect, useReducer } from "react";
import { cartReducer, initialCart } from "../reducers";
import { IProduct } from "../interfaces";

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    const cart = localStorage.getItem("cartNew");
    if (cart) {
      dispatch({ type: "INITIAL_CART", payload: JSON.parse(cart) });
    }
  }, []);

  const addToCart = (product: IProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const substractCounterFromCart = (product: IProduct) => {
    dispatch({ type: "SUBSTRACT_COUNTER_FROM_CART", payload: product });
  };
  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: null });
  };


  return {
    state,
    addToCart,
    clearCart,
    removeItem,
    substractCounterFromCart,
  };
}
