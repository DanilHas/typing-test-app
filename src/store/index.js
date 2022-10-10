import { configureStore } from "@reduxjs/toolkit";
import optionsSlice from "./optionsSlice";
import textSlice from "./textSlice";

const store = configureStore({
  reducer: {
    text: textSlice,
    options: optionsSlice,
  },
});

export default store;
