const addUser = async (object: any) => {
  const apiUrl = `https://dicard-handicraft.herokuapp.com/api/v1/auth/sign-up`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: new URLSearchParams(object),
    });
    if (!response.ok) {
      const data = response.json;
      return {
        ...data,
        status: response.status
      };
    } else {
      const data = response.json;
      return {
        ...data,
        status: response.status
      };
    }
  } catch (error) {
    console.log(error);
  }
};
export default addUser;
