import { GetSortedArrayParams } from "../interfaces";

export const getSortedArray = ({ array, key }: GetSortedArrayParams) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
};
