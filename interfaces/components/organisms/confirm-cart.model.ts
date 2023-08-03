import { IProduct } from "../../utils/products.model";

export interface ConfirmCartProps {
  product: IProduct;
  toggle: () => void;
}
