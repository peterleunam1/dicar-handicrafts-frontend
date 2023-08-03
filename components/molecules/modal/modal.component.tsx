import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../..";
import { ModalProps } from "../../../interfaces";
import { Container, Overlay, Close } from "./modal.styled";

const Modal: FC<ModalProps> = ({
  children,
  status,
  setStatus,
  width,
  height,
}) => {
  const handleClose = () => {
    setStatus(false);
  };
  return (
    <>
      {status && (
        <Overlay>
          <Container width={width} height={height}>
            <Close onClick={handleClose}>
              <Icon margin="0" fill="fa-solid fa-xmark" />
            </Close>
            {children}
          </Container>
        </Overlay>
      )}
    </>
  );
};
export default Modal;
