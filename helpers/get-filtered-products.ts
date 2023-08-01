import { IProduct } from "../interfaces";

interface GetFilterParams {
  products: IProduct[];
  filter: string;
}

export const getFilterProducts = ({ products, filter }: GetFilterParams) => {
  return products?.filter((product) => {
    if (filter === "todas") {
      return products;
    } else {
      return product.type === filter;
    }
  });
};
