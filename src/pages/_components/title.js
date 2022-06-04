/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

function Title({ text }) {
  const rootStyles = (theme) =>
    css({
      display: "flex",
      justifyContent: "center",
    });

  return (
    <div css={rootStyles}>
      <Typography variant="h4">{text}</Typography>
    </div>
  );
}

export default Title;
