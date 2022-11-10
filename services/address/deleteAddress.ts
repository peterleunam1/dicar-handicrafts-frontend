import Cookies from "js-cookie";

const deleteAddress = async (id: number | string) => {
  const apiUrl = `https://dicard-handicraft.herokuapp.com/api/v1/private/address/remove/${id}`;
  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });
    const data = await response.json();
    console.log(response.status)

    return {
      ...data,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
  }
};
export default deleteAddress;
