
const singIn = async (object:any) => {
    try {
        const response = await fetch("https://dicard-handicraft.herokuapp.com/api/v1/auth/sign-in", {
          method: 'POST',
          headers: {'Access-Control-Allow-Origin':'*'},
          body: new URLSearchParams(object)
        });
      
        if (response.ok) {
          const result = await response.json();
          return result
        }
      } catch (err) {
        console.error(err);
      }
      
  }
  export default singIn; 
