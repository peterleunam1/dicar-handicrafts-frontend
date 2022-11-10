import { IProduct } from "../helpers/products"

export interface CartListProps {
    mode: "complete" | "summary"
    array?: IProduct[]
}