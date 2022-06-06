/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SliderControls(props) {
  const { onClickLeft, onClickRight, index, nItems, arrayLength } = props;

  const rootStyles = (theme) =>
    css({
      display: "flex",
      gap: "1rem",
    });

  const controlItemStyles = (theme) =>
    css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      height: "2.5rem",
      width: "2.5rem",
      border: `1px solid ${theme.palette.grey["300"]}`,
      color: theme.palette.grey["600"],
      ":hover": {
        backgroundColor: theme.palette.primary.main,
        border: `1px solid white`,
        color: "white",
      },
      transition: "color 0.3s, background-color 0.3s, border 0.3s",
      cursor: "pointer",
    });

  const controlItemStylesDisabled = (theme) =>
    css({
      color: theme.palette.grey["300"],
      ":hover": {
        backgroundColor: "white",
        border: `1px solid ${theme.palette.grey["300"]}`,
        color: theme.palette.grey["300"],
        cursor: "default",
      },
    });

  const leftStyles = (theme) => css({}, controlItemStyles(theme));

  const rightStyles = (theme) => css({}, controlItemStyles(theme));

  const iconStyles = (theme) =>
    css({
      position: "relative",
      left: "0.2rem",
    });

  function getDisabledRight(index) {
    if (index === arrayLength - nItems) return controlItemStylesDisabled;
  }

  function getDisabledLeft(index) {
    if (index === 0) return controlItemStylesDisabled;
  }

  return (
    <div css={rootStyles}>
      <div css={[leftStyles, getDisabledLeft(index)]} onClick={onClickLeft}>
        <ArrowBackIosIcon fontSize="0.5rem" css={iconStyles} />
      </div>
      <div css={[rightStyles, getDisabledRight(index)]} onClick={onClickRight}>
        <ArrowForwardIosIcon fontSize="0.5rem" />
      </div>
    </div>
  );
}
