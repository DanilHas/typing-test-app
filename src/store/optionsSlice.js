import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
  name: "options",
  initialState: {
    activeSymbol: 0,
    startTime: 0,
    completed: true,
    mistakes: 0,
    accuracy: 100,
    speed: 0,
    isLastValid: null,
    lastTime: 0,
  },
  reducers: {
    setNext: (state) => {
      state.activeSymbol += 1;
      state.isLastValid = true;
    },

    calculateMistakes: (state, action) => {
      state.isLastValid = false;
      state.mistakes += 1;
      state.accuracy =
        100 - ((state.mistakes * 100) / action.payload.length).toFixed(1);
    },

    changeComplete: (state) => {
      state.completed = !state.completed;
    },

    setStartTime: (state) => {
      state.startTime = Date.now();
    },

    setLastTime: (state) => {
      state.lastTime = Date.now() - state.startTime;
    },

    calculateSpeed: (state) => {
      state.speed =
        Math.round((state.activeSymbol * 60000) / state.lastTime) || 0;
    },
  },
});

export default optionsSlice.reducer;
export const {
  setNext,
  calculateMistakes,
  changeComplete,
  setStartTime,
  setLastTime,
  calculateSpeed,
} = optionsSlice.actions;
