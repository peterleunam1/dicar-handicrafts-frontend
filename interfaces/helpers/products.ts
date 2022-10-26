export interface ICategory {
    id: number,
    name: string
}

export interface IProduct {
    id: number,
    price: string,
    name: string,
    description: string,
    qty_in_stock: number,
    categories: ICategory[]
    image: string
}