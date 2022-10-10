import Button from "@mui/material/Button";
import { lime } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: lime[800],
    },
  },
});

const refreshPage = () => {
  window.location.reload();
};

function RefreshButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        onClick={refreshPage}
        variant="contained"
        sx={{ color: "white", padding: "3px 13px" }}
      >
        {"Refresh"}
      </Button>
    </ThemeProvider>
  );
}

export default RefreshButton;
