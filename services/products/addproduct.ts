import Cookies from "js-cookie";

const addProduct = async (object: any) => {
  console.log(object)
    const apiUrl = `https://dicard-handicraft.herokuapp.com/api/v1/private/products/create`;
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
      console.log(response)
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
  