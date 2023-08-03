import { IProduct } from "../utils/products.model";
import { UpdateProductSizeParams } from "../hooks";

export interface CartContextProviderProps {
  children: React.ReactNode;
}

export interface CartContextParams {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  clearCart: () => void;
  removeItem: (id: number) => void;
  substractCounterFromCart: (product: IProduct) => void;
  updateProductSize: (product: UpdateProductSizeParams) => void;
}

