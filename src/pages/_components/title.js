/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

function Title() {
  const rootStyles = (theme) =>
    css({
      display: "flex",
      justifyContent: "center",
    });

  return (
    <div css={rootStyles}>
      <Typography variant="h4">Гардеробные наполнение</Typography>
    </div>
  );
}

export default Title;
