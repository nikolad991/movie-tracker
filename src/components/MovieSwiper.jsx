import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import MovieCard from "./MovieCard";
const MovieSwiper = ({ moviesData }) => {
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
    <Swiper
      scrollbar={{
        hide: false,
      }}
      autoplay={{
        delay: 5000,
      }}
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={breakpoints}
      modules={[Scrollbar, Autoplay]}
    >
      {moviesData.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="mb-12">
            <MovieCard movie={movie} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSwiper;
