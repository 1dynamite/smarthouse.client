/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function SliderItem(props) {
  const { myData, itemDisplay, width, translationAmount } = props;

  const rootStyles = (theme) =>
    css({
      display: "flex",
      visibility: itemDisplay,
      flexDirection: "column",
      backgroundColor: "white",
      flexShrink: 0,
      width,
      overflow: "hidden",
      borderRadius: "10px 30px",
      boxShadow: `0px 0px 24px 3px ${theme.palette.grey[200]}`,
      transition: "transform 0.3s, visibility 0.1s",

      transform: `translate(${translationAmount}px)`,
    });

  const imgContainerStyles = (theme) =>
    css({
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
    });

  const imgStyles = (theme) =>
    css({
      width: "100px",
      height: "100px",
      objectFit: "cover",
    });

  const titleStyles = (theme) =>
    css({
      fontWeight: 500,
      textAlign: "center",
      marginTop: "1rem",
      marginBottom: "1rem",
    });

  const UISugarStyles = (theme) =>
    css({
      width: "3rem",
      borderTop: `2px solid ${theme.palette.primary.main}`,
    });

  const UISRootStyles = (theme) =>
    css({
      display: "flex",
      justifyContent: "center",
      marginBottom: "3rem",
    });

  return (
    <div css={rootStyles}>
      <div css={imgContainerStyles}>
        <img css={imgStyles} alt="thumbnail" src={myData.img} />
      </div>
      <Typography css={titleStyles}>{myData.title}</Typography>
      <div css={UISRootStyles}>
        <div css={UISugarStyles}></div>
      </div>
    </div>
  );
}
