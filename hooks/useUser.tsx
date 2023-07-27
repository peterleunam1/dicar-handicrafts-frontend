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

const useLocalStorage = (key: string) => {
  const [value, setValue] = useState([])
  useEffect(() => {
    JSON.parse(localStorage.getItem(key) || "");
    setValue(value);
  }, [key, value]);
  return {
    value,
  }
}