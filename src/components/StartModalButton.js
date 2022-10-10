import Button from "@mui/material/Button";

export default function StartModalButton(props) {
  return (
    <Button variant="contained" onClick={props.handleClose}>
      {"Start typing"}
    </Button>
  );
}
