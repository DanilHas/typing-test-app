import styled from "styled-components";
import InteractiveText from "./InteractiveText";
import SpeedAccuracyContainer from "./SpeedAccuracyContainer";

const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 15%;
  background: white;
  border-radius: 10px;
`;

function Main() {
  return (
    <StyledMain>
      <InteractiveText />
      <SpeedAccuracyContainer />
    </StyledMain>
  );
}

export default Main;
