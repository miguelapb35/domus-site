import React from "react";
import { Image as Img } from "theme-ui";

export default function Imagen({ src, ...rest }) {
  return <Img src={src} {...rest} />;
}
