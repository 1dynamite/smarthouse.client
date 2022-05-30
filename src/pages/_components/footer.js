/** @jsxImportSource @emotion/react */
import { Paper, Typography } from "@mui/material";

function Footer() {
  const rootStyles = (theme) => ({
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "0px",
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey["50"],
    marginTop: theme.spacing(5),
  });

  const numbersStyles = (theme) => ({
    display: "flex",
    flexDirection: "column",
  });

  const emailStyles = (theme) => ({
    display: "flex",
    flexDirection: "column",
  });

  const addressStyles = (theme) => ({
    display: "flex",
    flexDirection: "column",
  });

  return (
    <Paper variant="outlined" css={rootStyles}>
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
      <div css={emailStyles}>
        <Typography
          variant="overline"
          style={{ fontWeight: 600, marginBottom: "5px" }}
        >
          Email
        </Typography>
        <Typography variant="overline">furniture_wardrobe@mail.ru</Typography>
      </div>
      <div css={addressStyles}>
        <Typography
          variant="overline"
          style={{ fontWeight: 600, marginBottom: "5px" }}
        >
          Address
        </Typography>
        <Typography variant="overline">
          Tashkent city, Mirzo Ulug'bek distric, Amir Timur str. 250
        </Typography>
      </div>
    </Paper>
  );
}

export default Footer;
