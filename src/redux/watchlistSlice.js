import { createSlice } from "@reduxjs/toolkit";
const initialState = () => {
  return JSON.parse(localStorage.getItem("movie-watchlist")) || [];
};
const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const { movie } = action.payload;
      state.push({ movie, watched: false, myRating: null, myComment: "" });
    },
    setAsWatched: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((el) => el.movie.id === id);
      state[index].watched = true;
      console.log(state);
    },

    addComment: (state, action) => {
      const { id, comment, rating } = action.payload;
      const index = state.findIndex((el) => el.movie.id === id);
      state[index].myComment = comment;
      state[index].myRating = rating;
    },
    removeMovie: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((el) => el.movie.id === id);
      state.splice(index, 1);
    },
  },
});

export const { addMovie, setAsWatched, addComment, removeMovie } =
  watchlistSlice.actions;
export default watchlistSlice.reducer;
