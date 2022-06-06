/** @jsxImportSource @emotion/react */
import { Grid, Paper, Typography } from "@mui/material";
import { css } from "@emotion/react";

function Footer() {
  const rootStyles = (theme) => ({
    borderRadius: "0px",
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey["50"],
    marginTop: theme.spacing(8),
  });

  const numbersStyles = (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  });

  const emailStyles = (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  });

  const addressStyles = (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  });

  const gridItemStyles = (theme) => ({
    display: "flex",
    justifyContent: "center",
  });

  const textStyles = (theme) =>
    css({
      textAlign: "center",
    });

  return (
    <Paper variant="outlined" css={rootStyles}>
      <Grid container>
        <Grid item xs={12} md={4} lg={4} css={gridItemStyles}>
          <div css={numbersStyles}>
            <Typography
              variant="overline"
              style={{ fontWeight: 600, marginBottom: "5px" }}
            >
              Contact numbers
            </Typography>
            <Typography variant="overline">+998 90 445 5464</Typography>
            <Typography variant="overline">+998 90 445 5465</Typography>
            <Typography variant="overline">+998 90 445 5466</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} css={gridItemStyles}>
          <div css={emailStyles}>
            <Typography
              variant="overline"
              style={{ fontWeight: 600, marginBottom: "5px" }}
            >
              Email
            </Typography>
            <Typography variant="overline" css={textStyles}>
              furniture_wardrobe@mail.ru
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} css={gridItemStyles}>
          <div css={addressStyles}>
            <Typography
              variant="overline"
              style={{ fontWeight: 600, marginBottom: "5px" }}
            >
              Address
            </Typography>
            <Typography variant="overline" css={textStyles}>
              Tashkent city, Mirzo Ulug'bek distric, Amir Timur str. 250
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;
