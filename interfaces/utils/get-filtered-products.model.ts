import { IProduct } from "./products.model";

export interface GetFilterParams {
  products: IProduct[];
  filter: string;
}
