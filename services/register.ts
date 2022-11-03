const addUser = async (object: any) => {
  const apiUrl = `https://dicard-handicraft.herokuapp.com/api/v1/auth/sign-up`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: new URLSearchParams(object),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = response.json
    return data
  } catch (error) {
    console.log(error);
  }
};
export default addUser;
