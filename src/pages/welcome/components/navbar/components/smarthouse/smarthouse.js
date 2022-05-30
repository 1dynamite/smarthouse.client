/** @jsxImportSource @emotion/react */
import { Typography } from "@mui/material";
import { css } from "@emotion/react";

function Smarthouse({ variant }) {
  const mainStyles = (theme) =>
    css({
      fontSize: "1.2rem",
      color: variant === "default" ? "white" : theme.palette.text.secondary,
    });

  const AStyles = (theme) =>
    css({
      color: theme.palette.primary.main,
    });

  const houseStyles = (theme) =>
    css({
      color:
        variant === "default"
          ? theme.palette.grey["300"]
          : theme.palette.text.secondary,
    });

  return (
    <Typography css={mainStyles}>
      SM<span css={AStyles}>A</span>RT<span css={houseStyles}>HOUSE</span>
    </Typography>
  );
}

export default Smarthouse;
