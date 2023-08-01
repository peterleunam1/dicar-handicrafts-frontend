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
}

export interface IProductComponent {
  product: IProduct;
}
