import { useEffect, useState } from "react";
import { IProduct, UseLocalStorageProps } from "../interfaces";

export default function useLocalStorage({ key }: UseLocalStorageProps) {
  const [storage, setStorage] = useState<IProduct[]>();
  useEffect(() => {
    const localStorage = window.localStorage.getItem(key);
    if (localStorage) {
      setStorage(JSON.parse(localStorage));
    }
  }, [key]);

  return { storage: storage || [] };
}
