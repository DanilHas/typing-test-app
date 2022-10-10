import { Typography } from "@mui/material";
import styled from "styled-components";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledTypography = styled(Typography)`
  padding-left: 5px;
  opacity: 0.5;
`;

function AccuracyIconAndCaptionContainer() {
  return (
    <MainContainer>
      <ModeStandbyIcon sx={{ fontSize: "30px", opacity: "0.5" }} />
      <StyledTypography variant="overline" sx={{ fontSize: "14px" }}>
        {"Accuracy"}
      </StyledTypography>
    </MainContainer>
  );
}

export default AccuracyIconAndCaptionContainer;
