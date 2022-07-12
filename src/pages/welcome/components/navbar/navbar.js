/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Smarthouse from "./components/smarthouse/smarthouse";

/* const isMobile = document.documentElement.clientWidth < 600; */
const welcomeHeight = window.innerHeight;

const calcVariant = (height) => {
  if (window.scrollY < welcomeHeight - height) return "default";
  return "light";
};

let cb;

function Navbar() {
  const [variant, setVariant] = useState(calcVariant(0));
  const [height, setHeight] = useState(0);

  const navStyles = (theme) =>
    css({
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: `${theme.spacing(3)} ${theme.spacing(5)}`,
      backgroundColor:
        variant === "default" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.8)",
      backdropFilter: variant === "default" ? null : "blur(10px)",
      borderBottom:
        variant === "default" ? null : `1px solid ${theme.palette.grey["200"]}`,
      position: "fixed",
      width: "100%",
      top: "0",
      zIndex: "1",
      transition: "background-color 0.3s",
    });

  const navLinksStyles = (theme) =>
    css({
      color: variant === "default" ? "white" : theme.palette.text.secondary,
      "&:hover": {
        backgroundColor:
          variant === "default" ? "white" : theme.palette.primary.main,
        color: variant === "default" ? theme.palette.primary.main : "white",
      },
    });

  const rightHandStyles = (theme) =>
    css({
      display: "flex",
      gap: theme.spacing(2),
    });

  useEffect(() => {
    if (cb !== undefined) document.removeEventListener("scroll", cb);

    cb = () => {
      setVariant(calcVariant(height));
    };

    document.addEventListener("scroll", cb);

    return function cleanUp() {
      document.removeEventListener("scroll", cb);
    };
  }, [height]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setHeight(entries[0].borderBoxSize[0].blockSize);
    });

    const navEl = document.getElementById("navEl");

    resizeObserver.observe(navEl);

    return function cleanUp() {
      resizeObserver.unobserve(navEl);
    };
  }, []);

  return (
    <nav css={navStyles} id="navEl">
      <Smarthouse variant={variant} />
      {/* <div css={rightHandStyles}>
        <Button variant="text" css={navLinksStyles}>
          Browse
        </Button>
          <Button variant="text" css={navLinksStyles}>
          Find us
        </Button>
      </div> */}
    </nav>
  );
}

export default Navbar;
