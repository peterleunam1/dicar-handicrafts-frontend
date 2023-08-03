import { FC } from "react";
import { DeleteItemProps } from "../../../interfaces";
import { Button } from "./delete-item.styled";

const DeleteItem: FC<DeleteItemProps> = ({ onDelete, children }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Button onClick={handleDelete}>
      <div>{children}</div>
      Eliminar
    </Button>
  );
};
export default DeleteItem;
