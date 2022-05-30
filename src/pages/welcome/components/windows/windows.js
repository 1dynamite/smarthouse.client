/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import WindowOne from "./components/windowOne";
import DialogImage from "./components/dialogImage";
import { useState } from "react";
import { Link } from "react-router-dom";

const dialogImgWidth = 500;

function Windows(props) {
  const [dialogImgDisplay, setDialogImgDisplay] = useState("none");
  const [dialogImagePos, setDialogImagePos] = useState(0);
  const [dialogImgSrc, setDialogImgSrc] = useState("");

  const rootStyles = (theme) =>
    css({
      display: "flex",
      flexDirection: "column",
      borderRadius: "25px 80px 25px 25px",
      width: "70%",
      backgroundColor: theme.palette.grey["50"],
      boxShadow: theme.shadows[12],
      overflow: "hidden",
    });

  const facadeStyles = (theme) =>
    css({
      display: "flex",
    });

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
      width: "35%",
    });

  const facadeTextStyles = (theme) =>
    css({
      display: "flex",
      flexDirection: "column",
      flexGrow: "1",
      gap: theme.spacing(2),
      padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
      borderLeft: `1px solid ${theme.palette.grey["100"]}`,
    });

  const titleStyles = (theme) => css({});

  const desStyles = (theme) => css({});

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
    <div css={rootStyles} className="scroll_style">
      <div css={facadeStyles}>
        <img
          css={facadeImgStyles}
          alt="something"
          src={props.myData.img}
          height={220}
        />
        <div css={facadeTextStyles}>
          <Typography variant="h6" css={titleStyles}>
            {props.myData.title.firstPart}{" "}
            <span css={woodproStyles}>{props.myData.title.secondPart}</span>
          </Typography>
          <Typography variant="body1" css={desStyles}>
            {props.myData.des}
          </Typography>
          <Button variant="contained" css={buttonStyles}>
            <Link
              to={`garderobnie-napolnenie/${props.myData._id}`}
              css={linkStyles}
            >
              Learn more
            </Link>
          </Button>
        </div>
      </div>
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
