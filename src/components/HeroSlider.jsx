import { getBackdropUrl, getPosterUrl } from "../utils";
import { useGetPopularMoviesQuery } from "../redux/apiSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MovieCard from "./MovieCard";

const Search = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();
  return (
    <section className="w-5/6 flex  mx-auto  h-[70vh]  rounded-lg ">
      <Swiper
        style={{
          "--swiper-pagination-color": "#ca8a04",
          "--swiper-pagination-progressbar-size": "12px",
        }}
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper heroSlider"
      >
        {data?.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="bg-cover bg-top bg-no-repeat h-full bg-neutral-800 bg-opacity-50 bg-blend-darken shadow-2xl transition-all duration-600 flex flex-col md:flex-row items-center justify-center md:items-end md:justify-start pb-2"
              style={{
                backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
              }}
            >
              <div className="m-4  w-fit  shadow-2xl">
                <MovieCard movie={movie} showAddWatchlistButton={false} />
              </div>
              <div className="text-yellow-600 text-xs md:text-sm max-w-xs m-4 bg-neutral-800 bg-opacity-90 rounded-md p-2 ">
                {movie.overview
                  ? movie.overview
                  : "Can not be described by words."}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Search;
