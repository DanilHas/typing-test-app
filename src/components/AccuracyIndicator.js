import { Typography } from "@mui/material";

function AccuracyIndicator(props) {
  return (
    <Typography gutterBottom sx={{ fontSize: "17px", color: "#00bfff" }}>
      {props.children} {"%"}
    </Typography>
  );
}

export default AccuracyIndicator;
