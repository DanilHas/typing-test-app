import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CampaignIcon from "@mui/icons-material/Campaign";
import StartModalButton from "../StartModalButton";
import { useDispatch } from "react-redux";
import { changeComplete } from "../../store/optionsSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: "0 0 30px #00bfff",
  p: 4,
  outline: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "10px",
};

export default function StartModal(props) {
  const dispatch = useDispatch();

  const handleClose = () => {
    props.setOpenStartModal(false);
    dispatch(changeComplete());
  };

  return (
    <div>
      <Modal open={props.openStartModal} aria-labelledby="modal-modal-title">
        <Box sx={style}>
          <CampaignIcon
            sx={{
              fontSize: 40,
              color: "#00bfff",
            }}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2, mb: 2 }}
          >
            Get ready to type. Let's go!
          </Typography>
          <StartModalButton handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
