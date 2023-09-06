import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const { movie } = action.payload;
      state.push({ movie, watched: false, myRating: null, myComment: "" });
    },
  },
});

export const { addMovie } = watchlistSlice.actions;
export default watchlistSlice.reducer;
