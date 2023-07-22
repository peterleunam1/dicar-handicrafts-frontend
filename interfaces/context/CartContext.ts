import { IProduct } from "../helpers/products"

export interface CartContextProviderProps{
    children: React.ReactNode
}

export interface CartContextProps{
    update: boolean,
    setUpdate: (value: boolean) => void
    inCart: IProduct[]
    setInCart: (value: IProduct[]) => void
    count: number
    setCount: (value: number) => void
    qty: boolean
    setQty: (value: boolean) => void
}
