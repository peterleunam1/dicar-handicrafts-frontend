import { IProduct } from "../../helpers/products.model";

export interface ConfirmCartProps {
  product: IProduct;
  toggle: () => void;
}
