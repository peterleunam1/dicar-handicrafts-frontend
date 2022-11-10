import React, { useState } from "react";
import { AddressContextProps, UserContextProviderProps } from "../interfaces";

const ContextAdress = React.createContext<AddressContextProps>({
  setUpdate(value) {},
  setAddress(value) {},
  setCity(value) {},
  setDepartment(value) {},
});

export function AddressContextProvider({ children }: UserContextProviderProps) {

  const [update, setUpdate] = useState(false);
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  
  return (
    <ContextAdress.Provider
      value={{
        update,
        setUpdate,
        address,
        setAddress,
        setCity,
        city,
        setDepartment,
        department,
      }}
    >
      {children}
    </ContextAdress.Provider>
  );
}

export default ContextAdress;
