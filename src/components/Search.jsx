import { getBackdropUrl } from "../utils";
import { useGetPopularMoviesQuery } from "../redux/apiSlice";
import SearchBar from "./SearchBar";

const Search = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();

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
      <SearchBar />
    </section>
  );
};

export default Search;
