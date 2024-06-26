import React from "react";
import { getPosterUrl } from "../utils";
import { Link } from "react-router-dom";
import RatingCircle from "./RatingCircle";
import PosterPlaceholder from "../assets/poster_placeholder.png";
import { MdPlaylistAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/watchlistSlice";
import { toast } from "react-toastify";
const MovieCard = ({ movie, showAddWatchlistButton = true }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col w-48 h-[420px]  font-dosis bg-zinc-900 rounded-md text-white justify-between transition-all duration-500  hover:bg-zinc-800"
      key={movie.id}
    >
      <div className="relative rounded-md">
        {showAddWatchlistButton && (
          <div
            className="absolute top-0 l-0 text-3xl bg-neutral-800 bg-opacity-70 p-1 rounded-br-lg cursor-pointer z-40 hover:bg-neutral-500"
            onClick={() => {
              toast.success(`${movie.title} added to watchlist.`, {
                theme: "colored",
                style: { background: "#ca8a04" },
              });
              dispatch(addMovie({ movie }));
            }}
          >
            <MdPlaylistAdd />
          </div>
        )}

        <img
          className="rounded-md transition-all duration-500 hover:opacity-60 "
          src={
            movie.poster_path
              ? getPosterUrl(movie.poster_path)
              : PosterPlaceholder
          }
          alt=""
        />

        <div className="absolute -bottom-5 left-4 w-11 h-11">
          <RatingCircle rating={movie.vote_average} />
        </div>
      </div>
      <div className=" px-4 pb-5 mt-6 flex justify-between items-center  uppercase font-semibold  ">
        <Link to={`/movie/${movie.id}`}>
          <span className="text-yellow-600 hover:text-yellow-800">
            {movie.title}
          </span>
        </Link>
        <span className="text-xs px-2 ">
          {movie?.release_date?.slice(0, 4)}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
