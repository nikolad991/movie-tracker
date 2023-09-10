import { useSelector } from "react-redux";

import WatchlistItem from "../components/WatchlistItem";
const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist);

  return (
    <div className=" flex flex-col gap-3 items-center  w-5/6 mx-auto py-10">
      {/* TODO  */}
      {watchlist.length > 0 ? (
        watchlist?.map((watchlist_item) => (
          <WatchlistItem
            key={watchlist_item.movie.id}
            watchlist_item={watchlist_item}
          />
        ))
      ) : (
        <div>Add some movies to your watchlist to start</div>
      )}
    </div>
  );
};

export default Watchlist;
