import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useGetMoviesByNameQuery } from "../redux/apiSlice";
import { getPosterUrl } from "../utils";
import { Link } from "react-router-dom";
import RatingCircle from "./RatingCircle";
import PosterPlaceholder from "../assets/poster_placeholder.png";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isLoading } = useGetMoviesByNameQuery({
    name: searchQuery,
    page: 1,
  });

  const navigate = useNavigate();
  const handleSearch = (e) => {
    navigate(`/search/${searchQuery}`);
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value.trim());
  };
  return (
    <div className="px-1 lg:w-1/2 h-10 rounded-3xl bg-neutral-900 ">
      <form className="flex justify-between py-2 " onSubmit={handleSearch}>
        <input
          onChange={handleInputChange}
          required
          className="w-11/12 bg-neutral-900 rounded-3xl px-4 text-neutral-400 placeholder:text-neutral-400 focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="px-3 text-neutral-400">
          <BiSearch />
        </button>
      </form>
      {data?.results.length > 0 && (
        <div className="flex flex-col bg-neutral-900 rounded-lg h-64 overflow-scroll overflow-x-hidden my-2 p-5 ">
          <Link to={`/search/${searchQuery}`}>
            <div className="text-neutral-400 bg-neutral-800 p-2 text-center transition duration-500 hover:bg-neutral-700">
              See all {data.total_results} results
            </div>
          </Link>

          {data?.results?.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="flex gap-2 bg-neutral-800 transition duration-500 hover:bg-neutral-700 border-y border-neutral-700"
            >
              <div className="h-24 aspect-auto bg-black">
                <img
                  src={
                    movie.poster_path
                      ? getPosterUrl(movie.poster_path)
                      : PosterPlaceholder
                  }
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between w-full p-2">
                <div className="flex flex-col">
                  <div className="text-white text-lg">{movie.title}</div>
                  <div className=" text-neutral-400">
                    {movie.release_date.slice(0, 4)}
                  </div>
                </div>
                <div className="w-10 h-10">
                  <RatingCircle rating={movie.vote_average} />
                </div>
              </div>
            </Link>
          ))}
          <Link to={`/search/${searchQuery}`}>
            <div className="text-neutral-400 bg-neutral-800 p-2 text-center transition duration-500 hover:bg-neutral-700">
              See all {data.total_results} results
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
