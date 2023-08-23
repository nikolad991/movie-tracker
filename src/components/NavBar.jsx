import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="w-5/6 mx-auto">
      <div className="p-4">
        <Link to="/">
          <div className="flex items-center w-fit font-bold text-2xl font-dosis border-b-4 border-t-4 border-dashed border-black bg-yellow-700 p-1">
            <BiSolidMoviePlay /> <span>MOVIE_DB</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
