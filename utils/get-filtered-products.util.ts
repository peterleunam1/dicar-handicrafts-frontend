import { GetFilterParams } from "../interfaces";

export const getFilterProducts = ({ products, filter }: GetFilterParams) => {
  return products?.filter((product) => {
    if (filter === "todas") {
      return products;
    } else {
      return product.type === filter;
    }
  });
};
