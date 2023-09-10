import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useGetMoviesByNameQuery } from "../redux/apiSlice";
import { InfinitySpin } from "react-loader-spinner";

const SearchResults = () => {
  const { query } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: moviesData,
    error,
    isLoading,
  } = useGetMoviesByNameQuery({ name: query, page: currentPage });

  return (
    <section className="pb-10 bg-home bg-cover">
      <div className="w-5/6 mx-auto ">
        <div className="flex  flex-col  py-4 text-white">
          <span className="text-2xl">Search results for "{query}"</span>
          <span>Total results: {moviesData?.total_results} </span>
        </div>
        <div className="py-6 flex gap-3 text-white justify-center [&>button]:transition-all [&>button]:duration-500 select-none">
          <button
            onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            {"<"}
          </button>
          <div className="flex gap-2 flex-wrap">
            {[...Array(moviesData?.total_pages)].map((page, index) => (
              <button
                className={`flex items-center justify-center px-2 w-10 h-10 border-2 rounded-full font-semibold font-dosis hover:bg-neutral-800 ${
                  currentPage === index + 1 ? "bg-black" : ""
                }`}
                key={index}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < moviesData.total_pages ? prev + 1 : moviesData.total_pages
              )
            }
          >
            {">"}
          </button>
        </div>
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 z-50">
            <InfinitySpin color="#000000" />
          </div>
        )}
        {moviesData?.results?.length > 0 ? (
          <div className="flex flex-wrap gap-5 justify-center">
            {moviesData.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div>No movies found</div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
