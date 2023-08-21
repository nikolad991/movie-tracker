import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../api";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import 'swiper/css';

import "swiper/css/scrollbar";
const Trending = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    getTrendingMovies().then((response) => setMoviesData(response.results));
  }, []);

  return (
    <div className=" px-5 py-10 w-5/6 mx-auto">
      <h1 className="text-3xl font-dosis py-4 text-white">Trending Movies</h1>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        slidesPerView={6}
        spaceBetween={20}
        modules={[Scrollbar]}
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
