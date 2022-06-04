/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function DialogImage({ src, left, display, width }) {
  const imgStyles = (theme) =>
    css({
      position: "fixed",
      zIndex: "1",
      height: "90vh",
      width,
      top: "5%",
      left,
      display,
      boxShadow: "3px 7px 10px grey",
      borderRadius: theme.shape.borderRadius,
      objectFit: "cover",
      objectPosition: "center",
    });

  return <img css={imgStyles} alt="something" src={src} />;
}

export default DialogImage;
