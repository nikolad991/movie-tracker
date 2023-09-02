import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";


export const moviesApi = createApi({
    reducerPath: "moviesapi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3/", prepareHeaders: (headers) => {
            headers.set("Authorization", `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`);
            headers.set("accept", "application/json");
            return headers;
        }
    }), endpoints: (builder) => ({
        getTrendingMovies: builder.query({
            query: (period) => `/trending/movie/${period}?language=en-US`
        })

    })
})


export const { useGetTrendingMoviesQuery } = moviesApi;