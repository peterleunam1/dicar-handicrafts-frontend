import { sizes } from "../constants/sizes.constant";

export const getSizes = (category: string): string[] => {
  return sizes[category];
};
