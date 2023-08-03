import { IProduct } from "../../utils/products.model";

export interface CartItemProps {
  mode?: "summary" | "complete";
  item: IProduct;
}
