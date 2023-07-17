import { apiRoutes } from "../../constants";
import { GetProductByCategoryParams, ProductsModel } from "../../interfaces";

const getProductByCategory = async ({ category }:GetProductByCategoryParams):Promise<ProductsModel> => {
  try {
    const response = await fetch(`${apiRoutes.public.getProducts + category}`);
    if (!response.ok) throw new Error("Error: could not fetch data");

    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error('Error: could not fetch data');
  }
};
export default getProductByCategory;
