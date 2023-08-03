import { FindItemProps, IProduct } from "../interfaces";

export const findItem = ({ id, items }: FindItemProps) => {
  return items.find((item) => item.id === id);
};
