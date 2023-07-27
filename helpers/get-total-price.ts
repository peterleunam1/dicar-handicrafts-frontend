import { IProduct } from "../interfaces";

export const getTotalPrice = (cart: IProduct[]): number => {
  return cart.reduce((acc, item) => {
    return acc + item.price * item.quantity!;
  }, 0);
};
