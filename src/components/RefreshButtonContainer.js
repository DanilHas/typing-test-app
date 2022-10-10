import styled from "styled-components";
import RefreshButton from "./RefreshButton";

const StyledRefreshButtonContainer = styled.div`
  margin-top: auto;
  padding-bottom: 5px;
`;

const RefreshButtonContainer = () => {
  return (
    <StyledRefreshButtonContainer>
      <RefreshButton />
    </StyledRefreshButtonContainer>
  );
};

export default RefreshButtonContainer;
