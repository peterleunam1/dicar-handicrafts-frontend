import { IProduct } from "../helpers/products";

export interface SummaryProps {
    products: IProduct[]
    type: 'fast-buy' | 'checkout'
}