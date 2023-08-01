import { useEffect, useState } from "react";
import { IUser } from "../interfaces";

const useUser = (): { user: IUser } => {
  const [user, setUser] = useState<IUser>({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userAuth') || "{}");
    setUser(user);
  }, []);

  return {
    user
  };
};

export default useUser;
