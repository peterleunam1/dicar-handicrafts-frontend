import Cookies from "js-cookie";
import { BASE_URL } from "../../helpers";

export async function getQuantity() {
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
  const result = await response.json();
  return {
    ...result,
    status: response.status,
  };
}
