import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import isAuthReducer from "./slices/isAuthSlice";
import shoppingCartReducer from "./slices/shoppingCartSlice";
import progressReducer from "./slices/progressSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    isAuth: isAuthReducer,
    shoppingCart: shoppingCartReducer,
    progress: progressReducer,
  },
});
