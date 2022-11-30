import Cookies from "js-cookie";
import { BASE_URL } from "../../helpers";

const clearCart = async () => {
  const apiUrl = `${BASE_URL}/private/cart/clear`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer ' + Cookies.get("token")
      },
      body: "",
    });
    const data = response.json;

    return {
      ...data,
      status: response.status
    }
  } catch (error) {
  }
};
export default clearCart;
