import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../api";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar,Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/scrollbar";
const Trending = () => {
  const [period, setPeriod] = useState("week");
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    getTrendingMovies(period).then((response) =>
      setMoviesData(response.results)
    );
  }, [period]);
  const handlePeriodChange = (e) => {
    setPeriod(e.target.name);
  };
  const breakpoints = {
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    1536: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1875: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
  };
  return (
    <div className=" px-5 py-10 w-5/6 mx-auto">
      <div>
        <h1 className="text-3xl font-dosis py-4 text-whwite">
          Trending Movies
        </h1>
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

      <Swiper
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={1}
        spaceBetween={10}
        // Responsive breakpoints
        breakpoints={breakpoints}
        modules={[Scrollbar, Autoplay]}
      >
        {moviesData.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
