import { IProduct } from "./products";

export interface UpdateLocalStorageParams {
  state: IProduct[];
  key: string;
}
