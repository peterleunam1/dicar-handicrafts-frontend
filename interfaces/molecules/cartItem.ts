import { IProduct } from "../helpers/products"

export interface CartItemProps {
    mode?: "summary" | "complete"
    item: IProduct
    qt?: number

}