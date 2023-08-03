import { GetPluralParams } from "../interfaces";

export const getPlural = ({ qty, word }: GetPluralParams): string => {
  if (qty === 1) return word;
  return word + "s";
};
