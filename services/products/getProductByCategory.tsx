import { BASE_URL } from "../../helpers";

const getProductByCategory = async (category: any) => {
  const newCat = category.toString().toLowerCase();
  console.log(newCat)
  const response = await fetch(`${BASE_URL}/public/products/${newCat}`,
  );
  const result = await response.json();
  const { data } = result;

  return data;
};
export default getProductByCategory;
