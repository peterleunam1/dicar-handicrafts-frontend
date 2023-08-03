import { IProduct } from "../../helpers/products.model";

export interface CartItemProps {
  mode?: "summary" | "complete";
  item: IProduct;
}
