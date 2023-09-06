import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./apiSlice";
import watchlistSlice from "./watchlistSlice";
export const store = configureStore({
  reducer: {
    watchlist: watchlistSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
