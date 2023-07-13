import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { Keyframes } from "styled-components";
const Animation = keyframes`
0% { transform: translate(-50%,-50%) rotate(0deg); }
100% { transform: translate(-50%,-50%) rotate(360deg); }
`;
const Overlay = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  height: 42vh;

`
const LoaderStyled = styled.div`
    width: 50px;
  height: 50px;
  display: inline-block;
  overflow: hidden;
`;
const Inside = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */

  div{
    position: absolute;
  width: 30px;
  height: 30px;
  border: 5px solid #f6d1bc;
  border-top-color: transparent;
  border-radius: 50%;

  animation: ${Animation} 1s linear infinite;
  top: 30px;
  left: 30px;
  box-sizing: content-box;
  }
`;

const Loader: FC = () => {
  return (
    <Overlay>
      <LoaderStyled>
      <Inside>
        <div></div>
      </Inside>
    </LoaderStyled>
    </Overlay>
  );
};
export default Loader