import { SummaryProps } from "../interfaces";

export const getTotalPrice = ({ products, type }: SummaryProps): number => {
  if (type === "checkout") {
    return products.reduce((acc, item) => {
      return acc + item.price * item.quantity!;
    }, 0);
  } else {
    return Number(products[0]?.price);
  }
};
