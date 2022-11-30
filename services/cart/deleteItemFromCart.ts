import Cookies from "js-cookie";
import { BASE_URL } from "../../helpers";

const deleteItemFromCart = async (object: any) => {
  const apiUrl = `${BASE_URL}/private/cart/remove`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer ' + Cookies.get("token")
      },
      body: new URLSearchParams(object),
    });
    const data = response.json;

    return {
      ...data,
      status: response.status
    }
  } catch (error) {
  }
};
export default deleteItemFromCart;
