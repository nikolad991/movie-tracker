import React, { useEffect, useState } from "react";
import { getPosterUrl, getTrendingMovies } from "../api";

const Trending = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    getTrendingMovies().then((response) => setMoviesData(response.results));
  }, []);

  return (
    <div className=" p-5 w-5/6 mx-auto justify-center flex flex-wrap gap-10">
      {moviesData.map((movie) => (
        <div className=" flex flex-col w-64" key={movie.id}>
          <div className="relative rounded-md ">
            <img className="rounded-md" src={getPosterUrl(movie.poster_path)} alt="" />
            <div
              className="absolute -bottom-5 left-4 flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                background: `radial-gradient(closest-side, black 79%, transparent 80% 100%),conic-gradient(rgb(7, 156, 69) ${
                  movie.vote_average * 10
                }%,rgb(0, 241, 129) 0)`,
              }}
            >
              <progress
                className="hidden"
                value={movie.vote_average}
                min="0"
                max="10"
              ></progress>
              <span className="font-semibold text-sm text-white">
                {movie.vote_average.toFixed(2)}
              </span>
            </div>
          </div>
          <div className=" mt-6 flex justify-between">
            <span>{movie.title}</span>
            <span>{movie.release_date.slice(0, 4)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
