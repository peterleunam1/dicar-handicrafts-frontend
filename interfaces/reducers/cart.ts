import { IProduct } from "../helpers/products";

export type ActionType =
  | { type: "ADD_TO_CART"; payload: IProduct }
  | { type: "SUBSTRACT_COUNTER_FROM_CART"; payload: IProduct }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "CLEAR_CART"; payload: null }
  | { type: "INITIAL_CART"; payload: IProduct[] }
