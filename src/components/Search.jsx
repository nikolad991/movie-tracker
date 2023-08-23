import React, { useEffect, useState } from "react";
import { getPopularMovies, getTrendingMovies, getBackdropUrl } from "../api";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
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
    navigate(`/search/${searchQuery}`);
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value.trim());
  };
  return (
    <section
      style={{ backgroundImage: `url(${getBackdropUrl(imgUrl)})` }}
      className="w-5/6 flex items-center justify-center mx-auto bg-blue-400 h-[60vh] bg-cover bg-top bg-no-repeat bg-gradient-to-b from-neutral-900 to-neutral-600 bg-blend-darken	"
    >
      <div className="w-1/2 h-10 rounded-3xl bg-neutral-400 ">
        <form className="flex justify-between py-2 " onSubmit={handleSearch}>
          <input
            onChange={handleInputChange}
            required
            className="w-11/12 bg-neutral-400 rounded-3xl px-4  placeholder:text-black focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <button type="submit" className="px-3">
            <BiSearch />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
