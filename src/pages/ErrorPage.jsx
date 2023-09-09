import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { useRouteError, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const ErrorPage = () => {
  const { data, status, statusText, error } = useRouteError();
  return (
    <div className=" min-h-screen  flex flex-col  bg-neutral-600 gap-2">
      <Link to="/">
        <div className=" m-4 flex items-center w-fit font-bold text-2xl font-dosis border-b-4 border-t-4 border-dashed border-black bg-yellow-700 p-1">
          <BiSolidMoviePlay /> <span>MOVIE_DB</span>
        </div>
      </Link>
      <div className="flex flex-col items-center gap-5 py-20">
        <div className="bg-neutral-300 rounded-md flex flex-col p-8 items-center">
          <h1 className="text-5xl font-bold mt-5 p-5 rounded-md bg-red-800">
            {status}
          </h1>
          <h2 className="text-xl">{statusText}</h2>
          <p className="fs-3">
            <span className="text-red-900">Oops!</span> Page not found.
          </p>
          <p className="lead">{data}</p>
        </div>
        <Link
          to="/"
          className="bg-neutral-800 px-3 py-1 text-white text-lg font-semibold rounded-md transition duration-500 hover:bg-white hover:text-neutral-800"
        >
          Go Home
        </Link>
        <p className="text-white text-lg">Or type bellow to search for any movie</p>
        <SearchBar />
      </div>
      
    </div>
  );
};

export default ErrorPage;
