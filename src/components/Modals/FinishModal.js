import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import styled from "styled-components";
import RefreshButtonContainer from "../RefreshButtonContainer";
import SpeedIconAndCaptionContainer from "../SpeedIconAndCaptionContainer";
import SpeedIndicator from "../SpeedIndicator";
import { useSelector } from "react-redux";
import AccuracyIconAndCaptionContainer from "../AccuracyIconAndCaptionContainer";
import AccuracyIndicator from "../AccuracyIndicator";

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
  justifyContent: "space-between",
  borderRadius: "10px",
  alignItems: "center",
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  justify-content: center;
  width: 100%;
`;

const SpeedMeterContainer = styled.div`
  display: flex;
  flex-basis: 26%;
  flex-direction: column;
  align-items: center;
`;

const AccuracyMeterConteiner = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AccuracyIndicatorConteiner = styled.div`
  padding-left: 30px;
`;

export default function FinishModal() {
  const speedCounter = useSelector((state) => state.options.speed);
  const accuracyCounter = useSelector((state) => state.options.accuracy);

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EmojiEventsIcon
            sx={{
              fontSize: 50,
              color: "#00bfff",
            }}
          />
          <Typography id="modal-modal-title" variant="h3" component="h2" mt={2}>
            Congratulations!
          </Typography>
          <MainContainer>
            <SpeedMeterContainer>
              <SpeedIconAndCaptionContainer />
              <SpeedIndicator>{speedCounter}</SpeedIndicator>
            </SpeedMeterContainer>
            <AccuracyMeterConteiner>
              <AccuracyIconAndCaptionContainer />
              <AccuracyIndicatorConteiner>
                <AccuracyIndicator>{accuracyCounter}</AccuracyIndicator>
              </AccuracyIndicatorConteiner>
            </AccuracyMeterConteiner>
          </MainContainer>
          <RefreshButtonContainer />
        </Box>
      </Modal>
    </div>
  );
}
