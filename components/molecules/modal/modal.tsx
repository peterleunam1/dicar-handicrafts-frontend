import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../../../components";
import { ModalProps } from "../../../interfaces";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
`;
const Container = styled.section<{ width?: string; height?: string }>`
  width: ${(props) => props.width || "40%"};
  height: ${(props) => props.height || "30vh"};
  background: #fff;
  position: relative;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.15) 0px 7px 29px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.5px solid #000;
`;

const Close = styled.article`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal: FC<ModalProps> = ({
  children,
  status,
  setStatus,
  width,
  height,
}) => {
  return (
    <>
      {status && (
        <Overlay>
          <Container width={width} height={height}>
            <Close onClick={() => setStatus(false)}>
              <Icon margin="0px" fill="fa-solid fa-xmark" />
            </Close>
            {children}
          </Container>
        </Overlay>
      )}
    </>
  );
};
export default Modal;
