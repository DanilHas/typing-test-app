import styled from "styled-components";
import AccuracyMeter from "./AccuracyMeter";
import RefreshButtonContainer from "./RefreshButtonContainer";
import SpeedMeter from "./SpeedMeter";

const MainSpeedAccuracyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 25px 0;
`;

function SpeedAccuracyContainer() {
  return (
    <MainSpeedAccuracyContainer>
      <SpeedMeter />
      <AccuracyMeter />
      <RefreshButtonContainer />
    </MainSpeedAccuracyContainer>
  );
}

export default SpeedAccuracyContainer;
