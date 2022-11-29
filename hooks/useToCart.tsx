import { useState, useEffect, useContext } from "react";
import ContextCart from "../context/CartContext";
import { getProductsInCart } from "../services/cart/getProductsInCart";

const useToCart = () => {
    const [inCart, setInCart] = useState([]);
    const {setUpdate, update} = useContext(ContextCart)
  
    useEffect(() => {
      getProductsInCart().then((data) => {
        setInCart(data);
      });
      setUpdate(false)
    }, [update]);
  
    return {
      inCart: inCart,
    };
  };
  
  export default useToCart;
  