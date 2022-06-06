/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import getWelcomeScreen from "./services/getWelcomeScreen.js";

let myTimeout;

function WelcomeScreen() {
  const [WSData, setWSData] = useState(null);
  const [index, setIndex] = useState(2);

  const rootStyles = (theme) =>
    css({
      height: "100vh",
      width: "100%",
      boxShadow: theme.shadows[4],
      position: "relative",
    });

  const img = (theme) =>
    css({
      height: "100vh",
      width: "100%",
      zIndex: "-1",
      position: "absolute",
      transition: "0.3s",
      objectFit: "cover",
    });

  const titleRootStyles = (theme) =>
    css({
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      left: "0",
      top: "0",
      backgroundColor: "rgba(0,0,0,0.2)",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        left: "0rem",
        fontSize: "2rem",
        textAlign: "center",
        alignItems: "start",
      },
    });

  const titleStyles = (theme) =>
    css({
      position: "relative",

      bottom: "7rem",
      color: "white",
      width: "80%",
      [theme.breakpoints.down("md")]: {
        left: "0rem",
        fontSize: "2rem",
        textAlign: "center",
        bottom: "-7rem",
      },
    });

  useEffect(() => {
    getWelcomeScreen().then((data) => {
      setWSData(data);
    });
  }, []);

  useEffect(() => {
    clearTimeout(myTimeout);

    const myTimer = () => {
      if (WSData !== null && WSData.length !== 0) {
        if (index !== WSData.length - 1) setIndex(index + 1);
        else setIndex(0);
      }
    };

    myTimeout = setTimeout(myTimer, 30000);

    return function cleanUp() {
      clearTimeout(myTimeout);
    };
  }, [WSData, index]);

  return (
    <div css={rootStyles}>
      {WSData !== null
        ? WSData.map((val, innerIndex) => (
            <img
              key={val._id}
              alt="something"
              css={[img, { opacity: index === innerIndex ? "1" : "0" }]}
              src={val.img}
            />
          ))
        : ""}
      <div css={titleRootStyles}>
        <Typography variant="h3" css={titleStyles}>
          {WSData ? WSData[index].title : ""}
        </Typography>
      </div>
    </div>
  );
}

export default WelcomeScreen;
