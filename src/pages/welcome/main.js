/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Title from "../_components/title";
import Navbar from "./components/navbar/navbar";
import WelcomeScreen from "./components/welcomescreen/welcomescreen";
import Windows from "./components/windows/windows";
import getWindows from "./services/getWindows";
import OnDemand from "./components/ondemand/ondemand";

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
    getWindows().then((data) => {
      setWindowsDataMany(data);
    });
  }, []);

  return (
    <main>
      <Navbar></Navbar>
      <WelcomeScreen></WelcomeScreen>
      <Title text={"Гардеробные наполнение"} />
      <div css={windowsContainerStyles}>
        {windowsDataMany ? (
          <>
            <Windows myData={windowsDataMany[0]}></Windows>
            <Windows myData={windowsDataMany[1]}></Windows>
          </>
        ) : (
          ""
        )}
      </div>
      <Title text={"Индивидуально под заказ изготавливаем "} />
      <OnDemand />
    </main>
  );
}

export default Main;
