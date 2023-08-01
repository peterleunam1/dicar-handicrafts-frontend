import { CART_ACTIONS_TYPES } from "../constants";
import { updateLocalStorage } from "../helpers";
import { ActionType, IProduct } from "../interfaces";

export const initialCart: IProduct[] = [];
export const cartReducer = (state: typeof initialCart, action: ActionType) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.INITIAL_CART: {
      return payload;
    }

    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = payload;
      const productInCartIndex = state.findIndex(
        (product) => product.id === id
      );
      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity! += 1;
        updateLocalStorage({ state: newCart, key: "cart-dicar" });
        return newCart;
      }
      const newState = [
        ...state,
        {
          ...payload,
          quantity: 1,
          isAdded: true,
        },
      ];
      updateLocalStorage({ state: newState, key: "cart-dicar" });
      return newState;
    }

    case CART_ACTIONS_TYPES.SUBSTRACT_COUNTER_FROM_CART: {
      const { id } = payload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        if (newCart[productInCartIndex].quantity! > 1) {
          newCart[productInCartIndex].quantity! -= 1;
          updateLocalStorage({ state: newCart, key: "cart-dicar" });
          return newCart;
        }
      }
      return state;
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const newCart = state.filter((item) => item.id !== payload);
      updateLocalStorage({ state: newCart, key: "cart-dicar" });
      return newCart;
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      updateLocalStorage({ state: [], key: "cart-dicar" });
      return [];
    }

    default:
      return state;
  }
};
