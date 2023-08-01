import { getDiscountParams } from "../interfaces/helpers/get-discount";
import { convertPrice } from "./convert-price";

export const getDiscount = ({ pct, price }: getDiscountParams): string => {
  const desc: number = price * (pct / 100);
  const newPrice: number = price++ + desc;
  return convertPrice(newPrice);
};
