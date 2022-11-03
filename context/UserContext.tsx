import React, { useState } from "react";
import {
  IUser,
  UserContextProps,
  UserContextProviderProps,
} from "../interfaces";
import { useRouter } from "next/router";

const ContextUser = React.createContext<UserContextProps>({
  setUser(value) {},
});

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<Array<IUser>>([]);
  return (
    <ContextUser.Provider value={{ user, setUser }}>
      {children}
    </ContextUser.Provider>
  );
}

export default ContextUser;
