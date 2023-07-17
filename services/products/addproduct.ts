import Cookies from "js-cookie";
import { BASE_URL } from "../../constants";

const addProduct = async (object: any) => {
  const apiUrl = `${BASE_URL}/private/products/create`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer ' + Cookies.get("token")
      },
      body: JSON.stringify([object]),
    });
    const data = response.json;

    return {
      data,
      status: response.status
    }
  } catch (error) {
    throw new Error("Don't was possible to add the product");
  }
};
export default addProduct; 
