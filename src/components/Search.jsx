import { useState } from "react";
import { getBackdropUrl } from "../utils";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useGetPopularMoviesQuery } from "../redux/apiSlice";
import { InfinitySpin } from "react-loader-spinner";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPopularMoviesQuery();
  const handleSearch = (e) => {
    navigate(`/search/${searchQuery}`);
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value.trim());
  };
  return (
    <section
      style={{
        backgroundImage: `url(${getBackdropUrl(
          data?.results[Math.floor(Math.random() * data.results.length)]
            .backdrop_path
        )})`,
      }}
      className="w-5/6 flex items-center justify-center mx-auto  h-[70vh] bg-cover bg-top bg-no-repeat rounded-lg bg-neutral-800 bg-opacity-50 bg-blend-darken shadow-2xl transition-all duration-600"
    >
      {isLoading ? (
        <InfinitySpin color="#000000" />
      ) : (
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
      )}
    </section>
  );
};

export default Search;
