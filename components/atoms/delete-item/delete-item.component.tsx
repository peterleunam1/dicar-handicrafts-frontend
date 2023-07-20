import { FC } from "react";
import styled from "styled-components";
import { DeleteItemProps } from "../../../interfaces";

const Button = styled.button`
  display: flex;
  max-width: 400px;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  transition: 0.2s ease font-weight;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    font-weight: bold;
  }
`;

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
