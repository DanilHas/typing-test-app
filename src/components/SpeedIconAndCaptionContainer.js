import SpeedIcon from "@mui/icons-material/Speed";
import { Typography } from "@mui/material";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledTypography = styled(Typography)`
  padding-left: 5px;
  opacity: 0.5;
`;

function SpeedIconAndCaptionContainer() {
  return (
    <MainContainer>
      <SpeedIcon sx={{ fontSize: "30px", opacity: "0.5" }} />
      <StyledTypography variant="overline" sx={{ fontSize: "14px" }}>
        {"Speed"}
      </StyledTypography>
    </MainContainer>
  );
}

export default SpeedIconAndCaptionContainer;
