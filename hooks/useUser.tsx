const useUser = () => {
  let value;
  let user
  if (typeof window !== "undefined") {
    value = window.localStorage.getItem("userAuth");
    if(value){
      user = JSON.parse(value)
    }
  }
  return {
    value: user || {},
  };
};

export default useUser;
