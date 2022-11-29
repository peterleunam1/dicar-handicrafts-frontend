import { BASE_URL } from "../helpers";

const singIn = async (object:any) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/sign-in`, {
          method: 'POST',
          headers: {'Access-Control-Allow-Origin':'*'},
          body: new URLSearchParams(object)
        });
      
        if (response.ok) {
          const result = await response.json();
          return {
            ...result,
            status: response.status
          }
        }else{
          const result = await response.json();
          return{
            ...result,
            status: 401
          }
        }
      } catch (err:any) {
        console.log("Esto es una prueba")
      }
      
  }
  export default singIn; 
