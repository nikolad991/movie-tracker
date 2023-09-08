import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { AiOutlineEye } from "react-icons/ai";
import { addComment, setAsWatched, removeMovie } from "../redux/watchlistSlice";
import RatingCircle from "./RatingCircle";
const WatchlistItem = ({ watchlist_item }) => {
  const [showAddComment, setShowAddComment] = useState(false);
  const [myRating, setMyRating] = useState(5);
  const [myComment, setMyComment] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="relative w-full flex  items-center bg-neutral-600 rounded-md">
      <MovieCard movie={watchlist_item.movie} />

      {watchlist_item.watched ? (
        <div>
          <AiOutlineEye size={45} color="green" />
          {!showAddComment && !watchlist_item.myComment.length > 0 && (
            <button
              className="p-1 bg-slate-400"
              onClick={() => {
                setShowAddComment(true);
              }}
            >
              Add comment
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() =>
            dispatch(setAsWatched({ id: watchlist_item.movie.id }))
          }
          className="flex items-center bg-slate-500 p-4 rounded-md bg-opacity-50"
        >
          <span className="text-xs">Mark movie as watched</span>

          <AiOutlineEye size={45} />
        </button>
      )}
      {watchlist_item.myComment.length > 0 && (
        <>
          <div className="w-10 h-10">
            <RatingCircle rating={watchlist_item.myRating} />
          </div>
          <div className="p-4 bg-neutral-700">{watchlist_item.myComment}</div>
        </>
      )}
      {showAddComment && (
        <div className="flex flex-col bg-neutral-400 p-2 rounded-md">
          <textarea
            className="h-full"
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setMyComment(e.target.value);
            }}
          ></textarea>

          <div className="flex justify-between my-1">
            <div className="flex gap-3 items-center bg-slate-400 rounded-md  px-2 py-1 text-lg font-semibold select-none">
              <span onClick={() => setMyRating((prev) => prev - 0.1)}>-</span>
              <span className="">{myRating.toFixed(1)}</span>
              <span onClick={() => setMyRating((prev) => prev + 0.1)}>+</span>
            </div>
            <button
              className="bg-blue-400 rounded-md  px-2 py-1"
              onClick={() => {
                dispatch(
                  addComment({
                    id: watchlist_item.movie.id,
                    comment: myComment,
                    rating: myRating,
                  })
                );
                setShowAddComment(false);
              }}
            >
              Add comment
            </button>
          </div>
        </div>
      )}
      <button
        className="p-1 bg-slate-400 absolute top-0 right-0 "
        onClick={() => dispatch(removeMovie({ id: watchlist_item.movie.id }))}
      >
        Remove from watchlist
      </button>
    </div>
  );
};

export default WatchlistItem;
