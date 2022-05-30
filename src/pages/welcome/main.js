/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Title from "../_components/title";
import Navbar from "./components/navbar/navbar";
import WelcomeScreen from "./components/welcomescreen/welcomescreen";
import Windows from "./components/windows/windows";

import windowsData from "./components/windows/services/windowsData";

function Main() {
  const [windowsDataMany, setWindowsDataMany] = useState(null);

  const windowsContainerStyles = (theme) =>
    css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing(8),
    });

  useEffect(() => {
    setWindowsDataMany(windowsData.windowsMany);
  }, []);

  return (
    <main>
      <Navbar></Navbar>
      <WelcomeScreen></WelcomeScreen>
      <div css={windowsContainerStyles}>
        <Title />
        {windowsDataMany ? (
          <>
            <Windows myData={windowsDataMany[0]}></Windows>
            <Windows myData={windowsDataMany[1]}></Windows>
          </>
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

export default Main;
