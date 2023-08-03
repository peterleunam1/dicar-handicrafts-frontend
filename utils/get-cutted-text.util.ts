export const getCuttedText = (description: string): string => {
  const index = description.indexOf(".");
  if (index !== -1) {
    return description.slice(1, index + 1);
  }
  return description;
};
