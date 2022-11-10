import React, { useState } from "react";
import {
  CounterCart,
  CounterCartProviderProps
} from "../interfaces";

const CounterCartContext = React.createContext<CounterCart>({
  setCounter(value) {}
});

export function CounterCartProvider({ children }: CounterCartProviderProps) {
  const [counter, setCounter] = useState(0)
  return (
    <CounterCartContext.Provider value={{counter, setCounter}}>
      {children}
    </CounterCartContext.Provider>
  );
}

export default CounterCartContext;
