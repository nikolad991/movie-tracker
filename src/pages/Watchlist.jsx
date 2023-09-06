import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import {AiOutlineEye} from "react-icons/ai";
const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist);
  return (
    <div className="w-5/6 mx-auto">
       {/* TODO  */}
      {watchlist.map((watchlist_item) => (
        <div className="flex gap-3 items-center" key={watchlist_item.movie.id}>
          <MovieCard movie={watchlist_item.movie} />
          <div>I have watched this movie</div>
          <AiOutlineEye size={45}  />
          <AiOutlineEye size={45} color="green" />

         
          <textarea className="h-full" name="" id="" cols="30" rows="10"></textarea>
          <button>Add comment</button>


        </div>
      ))}
    </div>
  );
};

export default Watchlist;
