import { BASE_URL } from "../../helpers";

const getProductByCategory = async (category: string) => {
  try {
    const response = await fetch(`${BASE_URL}/public/products/${category}`);
    if (!response.ok) throw new Error("Error: could not fetch data");

    const result = await response.json();
    const { data } = result;
    return data;

  } catch (error) {
    console.log(error);
  }
};
export default getProductByCategory;
