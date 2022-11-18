import React, { useEffect, useState } from "react";
import {
  CounterCart,
  CounterCartProviderProps
} from "../interfaces";

const CounterCartContext = React.createContext<CounterCart>({
  counter: 0,
  setCounter(value: number) { }
});

export function CounterCartProvider({ children }: CounterCartProviderProps) {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const elementsInCart = JSON.parse(localStorage.getItem('cart') || "[]");
    setCounter(elementsInCart.length);
  }, []);

  return (
    <CounterCartContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterCartContext.Provider>
  );
}

export default CounterCartContext;
