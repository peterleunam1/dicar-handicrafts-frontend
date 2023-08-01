import { FC } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { ZoonImageProps } from "../../../interfaces";

const ZoomImage: FC<ZoonImageProps> = ({ src, scale }) => {
  return (
    <InnerImageZoom
      src={src}
      zoomSrc={src}
      zoomType="hover"
      zoomScale={scale}
    />
  );
};
export default ZoomImage;
