export interface IProduct {
    id?: number,
    category?: string,
    price?: number,
    name?: string,
    description?: string,
    qty_in_stock?: number,
    type?: string,
    image: string,
    qty?: number
}

export interface IProductComponent {
    product: IProduct,
    setInCart: (product: IProduct) => void
}