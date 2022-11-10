import { IProduct } from "../helpers/products"

export interface CartItemProps {
    mode?: "summary" | "complete"
    item: IProduct
    qt?: number
    total?: number
    setTotal: (value:number) => void
}