import { BASE_URL_DEPLOY } from "../constants";
import { GetUrlEncodedParams, GetUrlEncodedReturn } from "../interfaces";

export const getUrlEncoded = ({
  data,
  productsInCart
}: GetUrlEncodedParams): GetUrlEncodedReturn => {

  const personalData = Object.keys(data)
    .map((key) => {
      return encodeURIComponent(key) + ":%20" + encodeURIComponent(data[key]);
    })
    .join(`%0A`);

  const products = productsInCart.map(({ id, name, category }) => {
    return (
      encodeURIComponent(name) +
      ":%0A %20" +
      "%0A %20 Miralo en: *" +
      encodeURIComponent(`${BASE_URL_DEPLOY}/productos/${category}/${id}%0A`)
    );
  });

  return { personalData, products };
};
