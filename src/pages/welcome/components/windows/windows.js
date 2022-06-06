/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import WindowOne from "./components/windowOne";
import DialogImage from "./components/dialogImage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const dialogImgWidth = 600;

function Windows(props) {
  const [dialogImgDisplay, setDialogImgDisplay] = useState("none");
  const [dialogImagePos, setDialogImagePos] = useState(0);
  const [dialogImgSrc, setDialogImgSrc] = useState("");

  const rootStyles = (theme) =>
    css({
      display: "flex",
      flexDirection: "column",
      borderRadius: "25px",
      width: "70%",
      backgroundColor: theme.palette.grey["50"],
      boxShadow: theme.shadows[12],
      overflow: "hidden",
    });

  const facadeStyles = (theme) => css({});

  const warehouseStyles = (theme) =>
    css({
      display: "flex",
      gap: theme.spacing(2),
      overflow: "auto",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.grey["300"],
      borderTop: `1px solid ${theme.palette.grey["400"]}`,
    });

  const facadeImgStyles = (theme) =>
    css({
      objectFit: "cover",
      width: "100%",
    });

  const facadeTextStyles = (theme) =>
    css({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: theme.spacing(2),
      padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
      borderLeft: `1px solid ${theme.palette.grey["100"]}`,
    });

  const titleStyles = (theme) =>
    css({
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "start",
      },
    });

  const desStyles = (theme) =>
    css({
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "start",
      },
    });

  const buttonStyles = (theme) =>
    css({
      width: "max-content",
    });

  const woodproStyles = (theme) =>
    css({
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    });

  const linkStyles = (theme) =>
    css({
      color: "inherit",
      textDecoration: "none",
      width: "max-content",
    });

  const linkContainerStyles = (theme) =>
    css({
      display: "flex",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
      [theme.breakpoints.up("md")]: {
        justifyContent: "start",
      },

      marginBottom: "1rem",
    });

  const mover = (src, e) => {
    const offsetRight = e.target.getBoundingClientRect().right + 10;
    const offsetLeft = e.target.getBoundingClientRect().left - 10;
    const docWidth = document.documentElement.clientWidth;

    let imgPos;

    if (offsetRight + dialogImgWidth <= docWidth) imgPos = offsetRight;
    else imgPos = offsetLeft - dialogImgWidth;

    setDialogImagePos(imgPos);

    setDialogImgSrc(src);
    setDialogImgDisplay("block");
  };

  const mout = () => {
    setDialogImgDisplay("none");
  };

  return (
    <div css={rootStyles}>
      <Grid container css={facadeStyles}>
        <Grid item xs={12} sm={6} md={4}>
          <img
            css={facadeImgStyles}
            alt="something"
            src={props.myData.img}
            height={220}
          />
        </Grid>
        <Grid xs={12} sm={6} item md={8}>
          <div css={facadeTextStyles}>
            <Typography variant="h6" css={titleStyles}>
              {props.myData.title.firstPart}{" "}
              <span css={woodproStyles}>{props.myData.title.secondPart}</span>
            </Typography>
            <Typography variant="body1" css={desStyles}>
              {props.myData.des}
            </Typography>
            <div css={linkContainerStyles}>
              <Link
                to={`garderobnie-napolnenie/${props.myData._id}`}
                css={linkStyles}
              >
                <Button variant="contained" css={buttonStyles}>
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
      <div css={[warehouseStyles]}>
        {props.myData.windows.map((el, index) => (
          <WindowOne key={index} src={el} mover={mover} mout={mout} />
        ))}
      </div>
      <DialogImage
        src={dialogImgSrc}
        left={dialogImagePos}
        display={dialogImgDisplay}
        width={dialogImgWidth}
      />
    </div>
  );
}

export default Windows;
