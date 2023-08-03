import { FC } from "react";
import { Inside, LoaderStyled, Overlay } from "./loader.styled";

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
export default Loader;
