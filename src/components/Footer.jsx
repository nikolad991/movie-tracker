import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BiSolidMoviePlay } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const watchlist = useSelector((state) => state.watchlist);
  return (
    <div className="bg-neutral-800 text-white  p-4 w-full flex flex-col gap-3 items-center justify-center">
      <div className="bg-gradient-to-r from-neutral-600 to-yellow-800 rounded-md p-5">
        <div className="flex items-center w-fit font-bold text-black text-2xl font-dosis border-b-4 border-t-4 border-dashed border-black bg-yellow-700 p-1">
          <BiSolidMoviePlay /> <span>MOVIE_DB</span>
        </div>
      </div>

      <div className="flex gap-8 hover:[&>a]:text-red-500 [&>a]:transition [&>a]:duration-500 ">
        <Link to="/">Home</Link>

        <Link to="/watchlist">My Watchlist({watchlist.length})</Link>
      </div>
      <div className="flex gap-3 items-center hover:[&>a]:text-red-500 [&>a]:transition [&>a]:duration-500 ">
        <a href="https://instagram.com" target="_blank">
          <AiFillInstagram size={30} />
        </a>
        <a href="https://facebook.com" target="_blank">
          <AiFillFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank">
          <AiFillTwitterSquare size={30} />
        </a>
      </div>
      <div className="text-sm flex gap-2">
        2023 Developed by{" "}
        <a
          href="https://github.com/nikolad991"
          target="_blank"
          className="flex  hover:text-red-400"
        >
          {" "}
          <AiFillGithub size={18} /> nikolad991
        </a>
      </div>
    </div>
  );
};

export default Footer;
