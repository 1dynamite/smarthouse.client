/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

function Title({ text }) {
  const rootStyles = (theme) =>
    css({
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(9),
    });

  const textStyles = (theme) =>
    css({
      textAlign: "center",
    });

  return (
    <div css={rootStyles}>
      <Typography variant="h4" css={textStyles}>
        {text}
      </Typography>
    </div>
  );
}

export default Title;
