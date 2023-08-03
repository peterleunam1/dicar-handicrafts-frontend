import { IProduct } from "../../utils/products.model";

export interface SummaryProps {
  products: IProduct[];
  type: "fast-buy" | "checkout";
}
