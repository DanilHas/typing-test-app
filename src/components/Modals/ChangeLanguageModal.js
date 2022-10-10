import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LanguageIcon from "@mui/icons-material/Language";
import RefreshButtonContainer from "../RefreshButtonContainer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: "0 0 30px #00bfff",
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "10px",
  outline: "none",
};

export default function ChangeLanguageModal() {
  return (
    <div>
      <Modal open={true} aria-describedby="modal-modal-description">
        <Box sx={style}>
          <LanguageIcon
            sx={{
              fontSize: 50,
              color: "#00bfff",
            }}
          />
          <Typography
            id="modal-modal-description"
            variant="h6"
            sx={{ mt: 2, mb: 2 }}
          >
            Please change your keyboard layout to English.
          </Typography>
          <RefreshButtonContainer />
        </Box>
      </Modal>
    </div>
  );
}
