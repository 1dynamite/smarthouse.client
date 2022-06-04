/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import CardMediaMui from "@mui/material/CardMedia";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { css } from "@emotion/react";

export default function CardMedia(props) {
  const [zoomIconSize, setzoomIconSize] = useState("0");
  const cardMediaEl = useRef(null);
  const [zoomSqrD, setZoomSqrD] = useState(0);
  const [zoomSqrW, setZoomSqrW] = useState(0);

  const greyOutBgStyles = (theme) =>
    css({
      height: 300,
      width: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      transition: "background-color 0.3s",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });

  useEffect(() => {}, []);

  const onMouseOver = () => {
    setZoomSqrD(15);
    setZoomSqrW(2);
    setzoomIconSize("2rem");
  };

  const onMouseOut = () => {
    setZoomSqrD(0);
    setZoomSqrW(0);
    setzoomIconSize("0");
  };

  const zoomSqr = {
    height: 15,
    width: 15,
    position: "absolute",
    transition: "left 0.3s, right 0.3s, bottom 0.3s, top 0.3s",
  };

  return (
    <div
      style={{
        cursor: "pointer",
        position: "relative",
      }}
    >
      <CardMediaMui height={300} ref={cardMediaEl} component="img" {...props} />
      <div
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        css={greyOutBgStyles}
      >
        <ZoomInIcon
          style={{ color: "white", fontSize: zoomIconSize, transition: "0.3s" }}
        />
        <div
          style={{
            ...zoomSqr,
            borderLeft: `${zoomSqrW}px solid white`,
            borderTop: `${zoomSqrW}px solid white`,
            top: zoomSqrD,
            left: zoomSqrD,
          }}
        ></div>
        <div
          style={{
            ...zoomSqr,
            borderRight: `${zoomSqrW}px solid white`,
            borderTop: `${zoomSqrW}px solid white`,
            right: zoomSqrD,
            top: zoomSqrD,
          }}
        ></div>
        <div
          style={{
            ...zoomSqr,
            borderLeft: `${zoomSqrW}px solid white`,
            borderBottom: `${zoomSqrW}px solid white`,
            left: zoomSqrD,
            bottom: zoomSqrD,
          }}
        ></div>
        <div
          style={{
            ...zoomSqr,
            borderRight: `${zoomSqrW}px solid white`,
            borderBottom: `${zoomSqrW}px solid white`,
            bottom: zoomSqrD,
            right: zoomSqrD,
          }}
        ></div>
      </div>
    </div>
  );
}
