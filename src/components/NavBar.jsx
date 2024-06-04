import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
const NavBar = () => {
  const watchlist = useSelector((state) => state.watchlist);
  return (
    <nav className=" border-b border-neutral-300 w-5/6 mx-auto">
      <div className="p-4 flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center w-fit font-bold text-2xl font-dosis border-b-4 border-t-4 border-dashed border-black bg-yellow-700 p-1">
            <BiSolidMoviePlay /> <span>MOVIE_DB</span>
          </div>
        </Link>
        <SearchBar/>
        <NavLink to="/watchlist">
          <div className="text-white text-lg">
            My watchlist({watchlist.length})
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
