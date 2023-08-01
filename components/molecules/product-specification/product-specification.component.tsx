import { FC } from "react";
import styled from "styled-components";
import { getDiscount, getStateOfProduct } from "../../../helpers";
import { convertPrice } from "../../../helpers/convert-price";
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
const StrikeText = styled.div`
  position: relative;
  width: max-content;
  padding: 0px 8px;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background-color: #000;
    border-radius: 5px;
  }
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

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Text>
        Vendido y entregado por <AccentTex>Artesanías Dicar</AccentTex>
      </Text>
      <Strike>{discount}</Strike>
      <Price>
        {convertPrice(price)}{" "}
        <AccentTex size="15px" ml="8px">
          -30%
        </AccentTex>
      </Price>
      <AccentTex
        color={availability === "Disponible" ? "lightgreen" : "#ff4142"}
      >
        {availability}
      </AccentTex>
    </div>
  );
};
export default ProductSpecification;
