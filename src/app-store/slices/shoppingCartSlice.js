import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const shoppingCartSlice = createSlice({
  name: "shopping-cart",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } =
//   shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
