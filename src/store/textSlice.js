import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchText = createAsyncThunk(
  "text/fetchText",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1&format=text"
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.text();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const textSlice = createSlice({
  name: "interactiveText",
  initialState: {
    currentText: "",
  },
  extraReducers: {
    [fetchText.pending]: (state) => {
      state.status = "Loading";
      state.error = null;
    },
    [fetchText.fulfilled]: (state, action) => {
      state.status = "Resolved";
      state.currentText = action.payload;
    },
    [fetchText.rejected]: (state, action) => {
      state.status = "Rejected";
      state.error = action.payload;
    },
  },
});

export default textSlice.reducer;
