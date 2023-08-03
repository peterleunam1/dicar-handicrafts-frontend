import { sizes } from "../constants/sizes";

export const getSizes = (category: string): string[] => {
  return sizes[category];
};
