/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import Item from "./components/item";

export default function OnDemand() {
  const rootStyles = (theme) =>
    css({
      display: "flex",
      justifyContent: "center",
    });

  const gridContainerStyles = (theme) =>
    css({
      width: "80%",
    });

  return (
    <div css={rootStyles}>
      <Grid css={gridContainerStyles} container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Item
            myData={{
              title: "Кухонные гарнитуры",
              img: "kitchen.png",
            }}
          >
            xs=8
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item myData={{ title: "Спальные гарнитуры", img: "bed.png" }}>
            xs=4
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item myData={{ title: "Детскую мебель", img: "children.png" }}>
            xs=4
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item myData={{ title: "Прихожая мебель", img: "wardrobe.png" }}>
            xs=8
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
