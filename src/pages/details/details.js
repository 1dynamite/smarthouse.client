/** @jsxImportSource @emotion/react */
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import getDetails from "./services/getDetails";
import { useParams } from "react-router-dom";
import NavbarLight from "./components/navbar/navbar";
import Footer from "../_components/footer";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Item from "./components/item";
import Dialog from "./components/components/dialog";

function Details() {
  let params = useParams();
  const [detailsData, setDetailsData] = useState({ title: {}, cards: [] });

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const rootStyles = (theme) => css({});

  const woodproStyles = (theme) =>
    css({
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    });

  const titleStyles = (theme) =>
    css({
      textAlign: "center",
      marginBottom: "3rem",
    });

  const gridContainerStyles = (theme) =>
    css({
      padding: "1rem 3rem",
    });

  useEffect(() => {
    window.scrollTo(0, 0);

    getDetails(params.id).then((data) => {
      setDetailsData(data);
    });
  }, [params]);

  const handleClickOpen = (value) => {
    return () => {
      setOpen(true);
      setSelectedValue(value);
    };
  };

  return (
    <div css={rootStyles}>
      <Dialog
        open={open}
        selectedValue={selectedValue}
        setOpen={setOpen}
        setSelectedValue={setSelectedValue}
      />
      <NavbarLight />
      <Typography variant="h4" css={titleStyles}>
        {detailsData?.title.firstPart}
        <span css={woodproStyles}> {detailsData?.title.secondPart}</span>
      </Typography>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        css={gridContainerStyles}
      >
        {detailsData.cards.map((value, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            onClick={handleClickOpen(value)}
          >
            <Item index={index} value={value} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
}

export default Details;
