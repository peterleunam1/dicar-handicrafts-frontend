import { FC } from "react";
import { getCuttedText, getDiscount, getStateOfProduct } from "../../../utils";
import { convertPrice } from "../../../utils/convert-price.util";
import { Strike } from "../../../components";
import { ProductSpecificationProps } from "../../../interfaces";
import { AccentTex, Price, Text } from "./product-specification.styled";

const ProductSpecification: FC<ProductSpecificationProps> = ({
  name,
  description,
  price,
  qty_in_stock,
}) => {
  
  const discount = getDiscount({ price, pct: 30 });
  const availability = getStateOfProduct(qty_in_stock);
  const cuttedDescription = getCuttedText(description);

  return (
    <div>
      <h2>{name}</h2>
      <p>{cuttedDescription}</p>
      <Text>
        <AccentTex
          color={availability === "Disponible" ? "lightgreen" : "#ff4142"}
        >
          {availability}
        </AccentTex>
      </Text>
      <Strike>{discount}</Strike>
      <Price>
        {convertPrice(price)}
        <AccentTex size=".9375rem" ml=".5rem">
          -30%
        </AccentTex>
      </Price>
    </div>
  );
};
export default ProductSpecification;
