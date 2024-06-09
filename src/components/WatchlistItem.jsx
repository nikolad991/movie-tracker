import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { AiOutlineEye } from "react-icons/ai";
import { addComment, setAsWatched, removeMovie } from "../redux/watchlistSlice";
import RatingCircle from "./RatingCircle";
import { LiaWindowClose } from "react-icons/lia";
const WatchlistItem = ({ watchlist_item }) => {
  const [showAddComment, setShowAddComment] = useState(false);
  const [myRating, setMyRating] = useState(5);
  const [myComment, setMyComment] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="relative w-full flex  items-center  bg-neutral-600 rounded-md overflow-hidden">
      <MovieCard movie={watchlist_item.movie} showAddWatchlistButton={false} />

      <div className="flex px-5 justify-between items-center gap-2">
        {watchlist_item.watched ? (
          <div className="flex">
            <div className="flex items-center bg-slate-500 p-4 rounded-md bg-opacity-50 w-52 justify-between h-fit">
              <span className="text-xs">I watched this movie</span>
              <AiOutlineEye size={45} color="green" />
            </div>
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
            className="flex items-center bg-slate-500 p-4 rounded-md bg-opacity-50 w-52  justify-between"
          >
            <span className="text-xs">Mark movie as watched</span>
            <AiOutlineEye size={45} />
          </button>
        )}
        {watchlist_item.myComment.length > 0 && (
          <div className="h-[300px] w-[400px] bg-neutral-400 rounded-md overflow-hidden">
            <span>My Rating</span>
            <div className="w-10 h-10">
              <RatingCircle rating={watchlist_item.myRating} />
            </div>
            <div className="bg-neutral-500 h-full">
              {watchlist_item.myComment}
            </div>
          </div>
        )}
        {showAddComment && (
          <div className="relative flex flex-col bg-neutral-400 p-2 rounded-md">
            <textarea
              className="h-full"
              name=""
              id=""
              cols="50"
              rows="10"
              onChange={(e) => {
                setMyComment(e.target.value);
              }}
            ></textarea>
            <div className="flex justify-between mt-3">
              <div className="flex gap-3 items-center bg-slate-400 rounded-md  px-2 py-1 text-lg font-semibold select-none">
                <span onClick={() => setMyRating((prev) => prev - 0.1)}>-</span>
                <span className="">{myRating.toFixed(1)}</span>
                <span onClick={() => setMyRating((prev) => prev + 0.1)}>+</span>
              </div>
              <div className="flex items-center justify-center gap-1">
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
                <button
                  className="bg-red-400 rounded-md  px-2 py-1"
                  onClick={() => setShowAddComment(false)}
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        className="p-1 bg-red-500 text-white transition duration-500 hover:bg-white hover:text-red-500 absolute top-0 right-0 text-3xl "
        onClick={() => dispatch(removeMovie({ id: watchlist_item.movie.id }))}
      >
        <LiaWindowClose />
      </button>
    </div>
  );
};

export default WatchlistItem;
