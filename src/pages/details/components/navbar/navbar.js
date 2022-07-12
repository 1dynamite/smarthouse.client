/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import Smarthouse from "./components/smarthouse/smarthouse";

function NavbarLight() {
  const navStyles = (theme) =>
    css({
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: `${theme.spacing(3)} ${theme.spacing(5)}`,
      backgroundColor: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(10px)",
      borderBottom: `1px solid ${theme.palette.grey["200"]}`,
      width: "100%",
      marginBottom: "2rem",
    });

  const navLinksStyles = (theme) =>
    css({
      color: theme.palette.text.secondary,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    });

  const rightHandStyles = (theme) =>
    css({
      display: "flex",
      gap: theme.spacing(2),
    });

  return (
    <nav css={navStyles} id="navEl">
      <Smarthouse variant={"light"} />
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

export default NavbarLight;
