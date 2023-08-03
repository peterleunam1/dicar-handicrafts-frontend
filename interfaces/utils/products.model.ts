export interface IProduct {
  id: number;
  category: string;
  price: number;
  name: string;
  description: string;
  qty_in_stock: number;
  type: string;
  image: string;
  quantity?: number;
  size?: string;
}

export interface IProductComponent {
  product: IProduct;
}
