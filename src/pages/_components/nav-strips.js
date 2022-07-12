/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { blue } from "@mui/material/colors";
import { useState } from "react";

export default function NavStrips() {
  const [widthActive, setWidthActive] = useState(null);

  const onMouseOver = (value) => {
    return () => {
      setWidthActive(value);
    };
  };

  const rootStyles = (theme) =>
    css({
      position: "fixed",
      bottom: "50%",
      left: "0",
      zIndex: "10",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.3rem",
    });

  const stripItemStyles = (theme) =>
    css({
      display: "flex",
      alignItems: "stretch",
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: "0.3rem 0.3rem",
      borderRadius: "0",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
      minWidth: "0",
    });

  const textContainerStyles = (theme) =>
    css({
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0)",
      color: "white",
      overflow: "hidden",
      transition: "0.3s",
    });

  const iconContainerStyles = (theme) =>
    css({
      display: "flex",
      padding: "0.3rem",
      color: "white",
      borderRadius: theme.shape.borderRadius,
    });

  const facebook = (theme) =>
    css(
      {
        backgroundColor: blue[500],
      },
      iconContainerStyles(theme)
    );

  const instagram = (theme) =>
    css(
      {
        backgroundColor: blue[500],
      },
      iconContainerStyles(theme)
    );

  const location = (theme) =>
    css(
      {
        backgroundColor: blue[500],
      },
      iconContainerStyles(theme)
    );

  return (
    <div css={rootStyles}>
      <Button
        css={stripItemStyles}
        onMouseOver={onMouseOver("ins")}
        onMouseOut={() => {
          setWidthActive(null);
        }}
        onClick={() => {
          window.open("https://www.instagram.com/");
        }}
      >
        <div
          css={textContainerStyles}
          style={{
            maxWidth: widthActive === "ins" ? "100px" : "0",
            marginRight: widthActive === "ins" ? "0.5rem" : "0",
          }}
        >
          <Typography>Instagram</Typography>
        </div>
        <div css={instagram}>
          <InstagramIcon />
        </div>
      </Button>
      <Button
        css={stripItemStyles}
        onMouseOut={() => {
          setWidthActive(null);
        }}
        onMouseOver={onMouseOver("fb")}
        onClick={() => {
          window.open("https://www.facebook.com/");
        }}
      >
        <div
          css={textContainerStyles}
          style={{
            maxWidth: widthActive === "fb" ? "100px" : "0",
            marginRight: widthActive === "fb" ? "0.5rem" : "0",
          }}
        >
          <Typography>Facebook</Typography>
        </div>
        <div css={facebook}>
          <FacebookIcon color="" />
        </div>
      </Button>
      <Button
        css={stripItemStyles}
        onMouseOut={() => {
          setWidthActive(null);
        }}
        onMouseOver={onMouseOver("loc")}
        onClick={() => {
          window.open(
            "https://www.google.com/maps/place/Inha+University+in+Tashkent/@41.338525,69.33453,15z/data=!4m5!3m4!1s0x0:0x3772abeffc72e7b8!8m2!3d41.338525!4d69.33453"
          );
        }}
      >
        <div
          css={textContainerStyles}
          style={{
            maxWidth: widthActive === "loc" ? "100px" : "0",
            marginRight: widthActive === "loc" ? "0.5rem" : "0",
          }}
        >
          <Typography>Location</Typography>
        </div>
        <div css={location}>
          <LocationOnIcon />
        </div>
      </Button>
    </div>
  );
}
