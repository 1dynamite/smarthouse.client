/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

let myTimeout;

function WelcomeScreen() {
  const [images, setImages] = useState(null);
  const [index, setIndex] = useState(0);

  const rootStyles = (theme) =>
    css({
      height: "100vh",
      width: "100%",
      marginBottom: theme.spacing(6),
      borderBottom: `1px solid ${theme.palette.grey["50"]}`,
    });

  const img = (theme) =>
    css({
      height: "100vh",
      width: "100%",
      zIndex: "-1",
      position: "absolute",
      transition: "0.3s",
    });

  useEffect(() => {
    const myImages = ["/i1.jpg", "/i2.jpg", "/i3.jpg"];

    setImages(myImages);
  }, []);

  useEffect(() => {
    clearTimeout(myTimeout);

    const myTimer = () => {
      if (images !== null && images.length !== 0) {
        if (index !== images.length - 1) setIndex(index + 1);
        else setIndex(0);
      }
    };

    myTimeout = setTimeout(myTimer, 300000);

    return function cleanUp() {
      clearTimeout(myTimeout);
    };
  }, [images, index]);

  return (
    <div css={rootStyles}>
      {images !== null
        ? images.map((val, innerIndex) => (
            <img
              key={val}
              alt="something"
              css={[img, { opacity: index === innerIndex ? "1" : "0" }]}
              src={val}
            />
          ))
        : ""}
    </div>
  );
}

export default WelcomeScreen;
