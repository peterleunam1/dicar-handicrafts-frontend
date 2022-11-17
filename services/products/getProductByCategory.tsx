import useSWR from "swr";
import Loader from "../../components/atoms/loader/loader";
import { IProduct } from "../../interfaces";

interface RootObject {
  message: string;
  data: IProduct[];
}

// interface  {
//   id: number;
//   price: string;
//   name: string;
//   description: string;
//   category: string;
//   type: string;
//   qty_in_stock: number;
//   image: string;
//   createdAt: string;
//   updatedAt: string;
// }


const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

const getProductByCategory = async (category: any) => {

  const response = await fetch(
   ` https://dicard-handicraft.herokuapp.com/api/v1/public/products/${category}`
  );
  const result= await response.json();
  const {data} = result

  return data
};
export default  getProductByCategory;
