import Cookies from "js-cookie";
import { BASE_URL } from "../../helpers";

export async function getQuantity() {
  try {
    const response = await fetch(
      `${BASE_URL}/private/cart/quantity`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
    );
    if (response.status === 200) {
      const result = await response.json();
      return {
        ...result,
        status: response.status,
      };
    }
    else {
      throw new Error("User not logged in");
    }
  } catch (error) {
    return {
      status: 401,
      message: error
    };
  }
}
