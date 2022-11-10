import Cookies from "js-cookie";

export async function getAdress() {
  const response = await fetch(
    "https://dicard-handicraft.herokuapp.com/api/v1/private/address",
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
