import { useEffect, useReducer } from "react";
import { cartReducer, initialCart } from "../reducers";
import { IProduct, UpdateProductSizeParams } from "../interfaces";
import { CART_ACTIONS_TYPES } from "../constants";

export default function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    const cart = localStorage.getItem("cart-dicar");
    if (cart) {
      dispatch({
        type: CART_ACTIONS_TYPES.INITIAL_CART,
        payload: JSON.parse(cart),
      });
    }
  }, []);

  const addToCart = (product: IProduct) => {
    dispatch({ type: CART_ACTIONS_TYPES.ADD_TO_CART, payload: product });
  };
  const substractCounterFromCart = (product: IProduct) => {
    dispatch({
      type: CART_ACTIONS_TYPES.SUBSTRACT_COUNTER_FROM_CART,
      payload: product,
    });
  };
  const removeItem = (id: number) => {
    dispatch({ type: CART_ACTIONS_TYPES.REMOVE_FROM_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CART, payload: null });
  };
  const updateProductSize = ({ id, newSize }: UpdateProductSizeParams) => {
    dispatch({
      type: CART_ACTIONS_TYPES.UPDATE_PRODUCT_SIZE,
      payload: { id, newSize },
    });
  };

  return {
    state,
    addToCart,
    clearCart,
    removeItem,
    substractCounterFromCart,
    updateProductSize,
  };
}
