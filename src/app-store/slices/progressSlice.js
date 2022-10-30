import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
};

export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    cleanUpProgress: () => ({
      isLoading: false,
      error: null,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setError, setIsLoading, cleanUpProgress } =
  progressSlice.actions;
export const getProgress = state => state.progress;

export default progressSlice.reducer;
