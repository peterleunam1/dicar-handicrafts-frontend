import Cookies from "js-cookie";

const addAddress = async (object: any) => {
    const apiUrl = `https://dicard-handicraft.herokuapp.com/api/v1/private/address/create`;
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
  export default addAddress;
  