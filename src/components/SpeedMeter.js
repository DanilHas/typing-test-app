import { useSelector } from "react-redux";
import styled from "styled-components";
import SpeedIndicator from "./SpeedIndicator";
import SpeedIconAndCaptionContainer from "./SpeedIconAndCaptionContainer";

const MainSpeedMeterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
`;

function SpeedMeter() {
  const speedCounter = useSelector((state) => state.options.speed);

  return (
    <MainSpeedMeterContainer>
      <SpeedIconAndCaptionContainer />
      <SpeedIndicator>{speedCounter}</SpeedIndicator>
    </MainSpeedMeterContainer>
  );
}

export default SpeedMeter;
