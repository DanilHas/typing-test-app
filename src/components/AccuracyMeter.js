import { useSelector } from "react-redux";
import styled from "styled-components";
import AccuracyIconAndCaptionContainer from "./AccuracyIconAndCaptionContainer";
import AccuracyIndicator from "./AccuracyIndicator";

const MainAccuracyMeterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function AccuracyMeter() {
  const accuracyCounter = useSelector((state) => state.options.accuracy);

  return (
    <MainAccuracyMeterContainer>
      <AccuracyIconAndCaptionContainer />
      <AccuracyIndicator>{accuracyCounter}</AccuracyIndicator>
    </MainAccuracyMeterContainer>
  );
}

export default AccuracyMeter;
