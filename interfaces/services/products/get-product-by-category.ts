import { IProduct } from "../../helpers/products";

export interface ProductsModel {
  data: IProduct[];
  message: string;
}
export interface GetProductByCategoryParams {
  category: string;
}
