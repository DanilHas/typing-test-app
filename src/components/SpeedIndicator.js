import { Typography } from "@mui/material";

function SpeedIndicator(props) {
  return (
    <Typography gutterBottom sx={{ fontSize: "17px", color: "#00bfff" }}>
      {props.children} {"CPM"}
    </Typography>
  );
}

export default SpeedIndicator;
