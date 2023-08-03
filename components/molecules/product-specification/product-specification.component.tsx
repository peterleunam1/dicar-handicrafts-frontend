import { FC } from "react";
import styled from "styled-components";
import {
  getCuttedText,
  getDiscount,
  getStateOfProduct,
} from "../../../utils";
import { convertPrice } from "../../../utils/convert-price.util";
import { Strike } from "../../../components";
import { ProductSpecificationProps } from "../../../interfaces";

const Text = styled.p`
  margin: 18px 0;
  font-size: 13px;
`;
const AccentTex = styled.strong<{ size?: string; ml?: string; color?: string }>`
  color: ${(props) => props.color || "#f6d1bc"};
  font-size: ${(props) => props.size};
  margin-left: ${(props) => props.ml};
`;
const Price = styled.p`
  font-size: 23px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

const ProductSpecification: FC<ProductSpecificationProps> = ({
  name,
  description,
  price,
  qty_in_stock,
}) => {
  const discount = getDiscount({
    price: price,
    pct: 30,
  });
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
        <AccentTex size="15px" ml="8px">
          -30%
        </AccentTex>
      </Price>
    </div>
  );
};
export default ProductSpecification;
