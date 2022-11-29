import { BASE_URL } from "../../helpers";

const getProductByCategory = async (category: any) => {
  const response = await fetch(`${BASE_URL}/public/products/${category}`);
  const result = await response.json();
  const { data } = result;

  return data;
};
export default getProductByCategory;
