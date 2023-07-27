import { IProduct } from "../interfaces";

export const updateLocalStorage = (state: IProduct[]) => {
  localStorage.setItem("cartNew", JSON.stringify(state));
};
