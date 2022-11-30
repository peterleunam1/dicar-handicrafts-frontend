import Cookies from "js-cookie";
import { BASE_URL } from "../../helpers";

const sendIdToServer = async (id: string, amount: number) => {
  try {
    const response = await fetch(`${BASE_URL}/private/stripe/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Cookies.get("token"),
      },
      body: JSON.stringify({ id, amount }),
    });

    const data = await response.json();

    console.log(data);

    return {
      ...response,
      data
    }
  } catch (error) {

  }
};

export {
  sendIdToServer
}