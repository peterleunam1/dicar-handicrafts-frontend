import { FC } from "react";
import Size from "../../atoms/size/size-component";
import { getSizes } from "../../../utils/get-sizes.util";
import { ListOfSizesProps } from "../../../interfaces";
import { SizeContainer } from "./list-of-sizes.styled";

const ListOfSizes: FC<ListOfSizesProps> = ({
  setSizeSelect,
  category,
  sizeSelected,
}) => {
  const sizeList = getSizes(category);
  const handleSize = (size: string) => {
    setSizeSelect(size);
  };
  return (
    <SizeContainer>
      {sizeList.map((size, index) => {
        if (sizeList.length === 1) {
          return (
            <p key={index} onClick={() => handleSize(size)}>
              Talla unica
            </p>
          );
        } else {
          return (
            <Size
              key={index}
              size={size}
              isActived={size === sizeSelected ? true : false}
              onClick={() => handleSize(size)}
            />
          );
        }
      })}
    </SizeContainer>
  );
};
export default ListOfSizes;
