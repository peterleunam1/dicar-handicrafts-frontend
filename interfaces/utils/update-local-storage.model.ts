import { IProduct } from "./products.model";

export interface UpdateLocalStorageParams {
  state: IProduct[];
  key: string;
}
