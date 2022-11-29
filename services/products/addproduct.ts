import Cookies from "js-cookie";
import { BASE_URL } from "../../helpers";

const addProduct = async (object: any) => {
  console.log(object)
    const apiUrl = `${BASE_URL}/private/products/create`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          'Authorization': 'Bearer ' +  Cookies.get("token")
        },
        body: new URLSearchParams(object),
      });
    const data = response.json;

    return{
        ...data,
        status:response.status
    }
    } catch (error) {
      console.log(error);
    }
  };
  export default addProduct;
  