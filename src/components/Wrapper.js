import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  calculateMistakes,
  calculateSpeed,
  changeComplete,
  setLastTime,
  setNext,
  setStartTime,
} from "../store/optionsSlice";
import Main from "./Main";
import validator from "validator";
import ChangeLanguageModal from "./Modals/ChangeLanguageModal";
import FinishModal from "./Modals/FinishModal";
import StartModal from "./Modals/StartModal";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00bfff;
  outline: none;
`;

function Wrapper() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.currentText);
  const activeSymbol = useSelector((state) => state.options.activeSymbol);
  const completed = useSelector((state) => state.options.completed);
  const isLastValid = useSelector((state) => state.options.isLastValid);

  const [openStartModal, setOpenStartModal] = useState(true);
  const [changeLanguageModal, setChangeLanguageModal] = useState(false);
  const [finishModal, setFinishModal] = useState(false);

  const setNextValue = (event) => {
    if (event.key === text[activeSymbol] && completed === false) {
      dispatch(setNext());
    } else if (
      event.key !== "CapsLock" &&
      event.key !== "Shift" &&
      isLastValid !== false &&
      completed === false
    ) {
      dispatch(calculateMistakes(text));
    }

    if (activeSymbol >= text.length - 1 && completed === false) {
      dispatch(changeComplete());
      setFinishModal(true);
    }

    if (
      activeSymbol === 0 &&
      event.key !== "CapsLock" &&
      event.key !== "Shift"
    ) {
      dispatch(setStartTime());
    } else if (completed === false) {
      dispatch(setLastTime());
    }

    if (completed === false && activeSymbol > 0) {
      dispatch(calculateSpeed());
    }

    if (!validator.isAscii(event.key) && completed === false) {
      setChangeLanguageModal(true);
      dispatch(changeComplete());
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <StyledWrapper ref={ref} tabIndex={-1} onKeyDown={setNextValue}>
      <Main />
      {openStartModal ? (
        <StartModal
          openStartModal={openStartModal}
          setOpenStartModal={setOpenStartModal}
        />
      ) : null}
      {changeLanguageModal ? <ChangeLanguageModal /> : null}
      {finishModal ? <FinishModal /> : null}
    </StyledWrapper>
  );
}

export default Wrapper;
