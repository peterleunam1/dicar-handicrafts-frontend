import { IProduct } from "../../helpers/products.model";

export interface ProductsModel {
  data: IProduct[];
  message: string;
}
export interface GetProductByCategoryParams {
  category: string;
  filterById?: number;
}
