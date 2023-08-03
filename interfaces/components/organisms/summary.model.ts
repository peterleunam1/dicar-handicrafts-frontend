import { IProduct } from "../../helpers/products.model";

export interface SummaryProps {
  products: IProduct[];
  type: "fast-buy" | "checkout";
}
