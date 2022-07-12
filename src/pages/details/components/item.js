import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SellIcon from "@mui/icons-material/Sell";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CardMedia from "./components/CardMedia";
import { Tooltip } from "@mui/material";

export default function Item(props) {
  return (
    <Card key={props.index} variant="outlined">
      <CardMedia image={props.value.img} alt="thumbnail" />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          style={{
            fontWeight: "500",
            hyphens: "manual",
            borderBottom: "1px solid lightgrey",
            paddingBottom: "0.3rem",
          }}
          component="div"
        >
          {props.value.title}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
            <ColorLensIcon fontSize="1rem" />
            <Typography>Цвет:</Typography>
          </div>

          <Typography>{props.value.color}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.3rem",
              alignItems: "flex-start",
              marginRight: "1rem",
            }}
          >
            <SellIcon fontSize="1rem" />
            <Typography>Цена:</Typography>
          </div>
          <Typography
            style={{
              overflow: "auto",
              textAlign: "right",
            }}
          >
            {props.value.size1}
          </Typography>
        </div>

        {props.value.size2 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.3rem",
                alignItems: "center",
                marginRight: "3rem",
              }}
            >
              {/* <SellIcon fontSize="1rem" />
              <Typography>Цена:</Typography> */}
            </div>
            <Typography
              style={{
                overflow: "auto",
                textAlign: "right",
              }}
            >
              {props.value.size2}
            </Typography>
          </div>
        ) : (
          <></>
        )}

        {props.value.size3 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.3rem",
                alignItems: "center",
                marginRight: "3rem",
              }}
            >
              {/* <SellIcon fontSize="1rem" />
              <Typography>Цена:</Typography> */}
            </div>
            <Typography
              style={{
                overflow: "auto",
                textAlign: "right",
              }}
            >
              {props.value.size3}
            </Typography>
          </div>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  );
}
