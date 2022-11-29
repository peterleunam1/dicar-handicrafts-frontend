import { BASE_URL } from "../helpers";

const addUser = async (object: any) => {
  const apiUrl = `${BASE_URL}/auth/sign-up`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: new URLSearchParams(object),
    });

    const data = response.json;
    return {
      ...data,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
  }
};
export default addUser;
