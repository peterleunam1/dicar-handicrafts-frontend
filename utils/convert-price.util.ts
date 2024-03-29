export const convertPrice = (price: number): string => {
  const priceF = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$ ${priceF}`;
};
