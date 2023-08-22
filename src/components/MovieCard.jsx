import React from "react";
import { getPosterUrl } from "../api";
import { BsPlayFill } from "react-icons/bs";
const MovieCard = ({ movie }) => {
  return (
    <div
      className="flex flex-col w-48 h-[420px] mb-12  font-dosis bg-zinc-900 rounded-md text-white justify-between transition-all duration-500  hover:bg-zinc-800"
      key={movie.id}
    >
      <div className="relative rounded-md">
        <img
          className="rounded-md transition-all duration-500 hover:opacity-60 "
          src={getPosterUrl(movie.poster_path)}
          alt=""
        />
        <div
          className="absolute -bottom-5 left-4 flex items-center justify-center w-11 h-11 rounded-full border-2 border-black"
          style={{
            background: `radial-gradient(closest-side, black 79%, transparent 80% 100%),conic-gradient(rgb(7, 156, 69) ${
              movie.vote_average * 10
            }%,rgb(0, 241, 129) 0)`,
          }}
        >
          <span className="font-semibold text-sm ">
            {movie.vote_average.toFixed(2)}
          </span>
        </div>
      </div>
      <div className=" px-4 mt-6 flex justify-between items-center  uppercase font-semibold  ">
        <span>{movie.title}</span>
        <span className="text-xs px-2 ">{movie.release_date.slice(0, 4)}</span>
      </div>
      <div className="flex items-center justify-center gap-1 py-2">
        <span>
          <BsPlayFill />
        </span>
        <span>Trailer</span>
      </div>
    </div>
  );
};

export default MovieCard;
