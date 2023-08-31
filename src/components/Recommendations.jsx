import { useEffect, useState } from "react";
import { getRecommendations } from "../api";

import MovieSwiper from "./MovieSwiper";

const Recommendations = ({ movieId }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  useEffect(() => {
    getRecommendations(movieId).then((response) =>
      setRecommendedMovies(response.results)
    );
  }, [movieId]);
  return (
    <div className="px-5 py-10 w-5/6 mx-auto">
      <h1 className="text-3xl font-dosis py-4 text-whwite">
        Recommended Movies
      </h1>
      <MovieSwiper moviesData={recommendedMovies} />
    </div>
  );
};

export default Recommendations;
