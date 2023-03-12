import { useState, useEffect, useContext } from "react";
import ContextAdress from "../context/AddressContext";
import { getAdress } from "../services/address/getAdress";

export default function useAdress () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const {update, setUpdate} = useContext(ContextAdress)
  
  useEffect(() => {
    getAdress().then((data) => {
      setData(data);
      setLoading(false)
      setUpdate(false)
    });
  }, [update]);
  return {
    loading
  };
}
