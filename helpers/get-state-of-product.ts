export const getStateOfProduct = (quantity: number): string => {
  return quantity > 0 ? "Disponible" : "Agotado";
};
