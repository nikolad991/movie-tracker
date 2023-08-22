import React, { useEffect, useState } from "react";
import { getPopularMovies, getTrendingMovies, getBackdropUrl } from "../api";

const Search = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    getPopularMovies().then((response) =>
      setImgUrl(
        response.results[Math.floor(Math.random() * response.results.length)]
          .backdrop_path
      )
    );
    // console.log(imgUrl);
  }, []);
  const handleSearch = (e) => {
    console.log(`Search for ${searchQuery}`);
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <section
      style={{ backgroundImage: `url(${getBackdropUrl(imgUrl)})` }}
      className="w-5/6 flex items-center justify-center mx-auto bg-blue-400 h-[60vh] bg-cover bg-top bg-no-repeat"
    >
      <div className="flex w-1/2 h-20  bg-blue-400 rounded-lg overflow-hidden">
        <input onChange={handleInputChange} className="w-5/6" type="text" />
        <button onClick={handleSearch} className="flex items-center px-10 ">
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
