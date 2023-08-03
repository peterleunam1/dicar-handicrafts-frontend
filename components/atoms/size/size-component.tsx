import { FC } from "react";
import { SizeProps } from "../../../interfaces";
import { SizeStyled } from "./size.styled";

const Size: FC<SizeProps> = ({ size, onClick, isActived }) => {
  const handleSize = () => {
    onClick();
  };
  return (
    <SizeStyled onClick={handleSize} isActived={isActived || false}>
      {size}
    </SizeStyled>
  );
};
export default Size;
