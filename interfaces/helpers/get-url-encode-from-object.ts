import { IProduct } from "./products";

export interface GetUrlEncodedParams {
  data: Record<string, string>;
  productsInCart: IProduct[];
}
export interface GetUrlEncodedReturn {
  personalData: string;
  products: string[];
}
