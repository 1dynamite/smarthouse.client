/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function WindowOne({ src, mover, mout }) {
  const imgStyles = (theme) =>
    css({
      borderRadius: theme.shape.borderRadius,
      border: `1px solid ${theme.palette.grey["400"]}`,
      objectFit: "cover",
    });

  const onMouseOver = (e) => {
    mover(src, e);
  };

  const onMouseOut = () => {
    mout();
  };

  return (
    <img
      css={imgStyles}
      alt="something"
      src={src}
      height={100}
      width={80}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
}

export default WindowOne;
