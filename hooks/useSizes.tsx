import { useState } from "react";
import { getSizes } from "../helpers/get-sizes";

export default function useSizes(category: string) {
  const sizes = getSizes(category);
  const [sizeSelected, setSizeSelected] = useState<string>("");
  const handleSize = (size: string) => {
    setSizeSelected(size);
  };
  return {
    sizes,
    sizeSelected,
    setSizeSelected,
    handleSize,
  };
}
