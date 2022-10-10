import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchText } from "../store/textSlice";

const StyledText = styled(Typography)`
  padding: 25px 35px 25px 25px;
`;

const StyledSpan = styled.span`
  color: ${(props) => (props.failed || props.focused ? "white" : "green")};
  background: ${(props) =>
    props.focused ? "#32CD32" : props.failed ? "#FF0000" : "transparent"};
  border: ${(props) =>
    props.focused
      ? "2px solid #32CD32"
      : props.failed
      ? "2px solid #FF0000"
      : "none"};
  border-radius: ${(props) => (props.focused || props.failed ? "5px" : 0)};
`;

function InteractiveText() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchText());
  }, [dispatch]);

  const text = useSelector((state) => state.text.currentText);
  const activeSymbol = useSelector((state) => state.options.activeSymbol);
  const isLastValid = useSelector((state) => state.options.isLastValid);

  const addSpan = (note) => {
    return [...note].map((letter, index) => {
      if (activeSymbol > 0 && index < activeSymbol) {
        return <StyledSpan key={index}>{letter}</StyledSpan>;
      } else if (isLastValid === false && index === activeSymbol) {
        return (
          <StyledSpan key={index} failed>
            {letter}
          </StyledSpan>
        );
      } else if (index === activeSymbol) {
        return (
          <StyledSpan key={index} focused>
            {letter}
          </StyledSpan>
        );
      }
      return letter;
    });
  };

  return (
    <StyledText variant="h6" gutterBottom sx={{ mb: 0 }}>
      {addSpan(text)}
    </StyledText>
  );
}

export default InteractiveText;
