import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`);
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: (period) => `trending/movie/${period}?language=en-US`,
    }),

    getPopularMovies: builder.query({
      query: () => "movie/popular?language=en-US&page=1",
    }),
    getSingleMovie: builder.query({
      query: (movieId) => `movie/${movieId}?language=en-US`,
    }),
    getVideos: builder.query({
      query: (movieId) => `/movie/${movieId}/videos?language=en-US`,
    }),
    getTrailers: builder.query({
      query: (movieId) => `/movie/${movieId}/videos?language=en-US`,
      transformResponse: (res) =>
        res.results?.filter((video) => video.type === "Trailer"),
    }),
    getImages: builder.query({
      query: (movieId) => `/movie/${movieId}/images`,
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetSingleMovieQuery,
  useGetVideosQuery,
  useGetTrailersQuery,
  useGetImagesQuery,
} = moviesApi;
