import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByName } from "../api";
import MovieCard from "../components/MovieCard";

const SearchResults = () => {
  const [moviesData, setMoviesData] = useState([]);
  const params = useParams();
  useEffect(() => {
    getMoviesByName(params.query).then((response) =>
      setMoviesData(response.results)
    );
  }, []);
  return (
    <section className="w-5/6 mx-auto">
      <div className="text-2xl font-semibold py-4">
        Result for "{params.query}"
      </div>
      {moviesData.length > 0 ? (
        <div className="flex flex-wrap gap-10">
          {moviesData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div>No movies found</div>
      )}
    </section>
  );
};

export default SearchResults;
