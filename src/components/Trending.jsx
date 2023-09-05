import { useState } from "react";
import MovieSwiper from "./MovieSwiper";
import { useGetTrendingMoviesQuery } from "../redux/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
const Trending = () => {
  const [period, setPeriod] = useState("week");
  const {
    data: moviesData,
    error,
    isLoading,
  } = useGetTrendingMoviesQuery(period);

  const handlePeriodChange = (e) => {
    setPeriod(e.target.name);
  };
  return (
    <div className="px-2 py-10 w-5/6 mx-auto">
      <div>
        <h1 className="text-3xl font-dosis py-4 text-whwite">
          Trending Movies
        </h1>
        {isLoading && <InfinitySpin color="#000000" />}
        <div className="my-4 flex justify-around border border-green-500 font-semibold rounded-3xl w-fit [&>button]:rounded-3xl [&>button]:px-4 [&>button]:transition-all [&>button]:duration-1000 [&>button]:w-1/2  ">
          <button
            name="day"
            onClick={handlePeriodChange}
            className={`${
              period === "day" ? "bg-green-500 text-white" : ""
            } !rounded-r-none`}
          >
            Daily
          </button>
          <button
            name="week"
            onClick={handlePeriodChange}
            className={`${
              period === "week" ? "bg-green-500 text-white" : ""
            } !rounded-l-none`}
          >
            Weekly
          </button>
        </div>
      </div>
      {moviesData && <MovieSwiper moviesData={moviesData?.results} />}
    </div>
  );
};

export default Trending;
