import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBackdropUrl, getMovieById, getPosterUrl } from "../api";
import RatingCircle from "../components/RatingCircle";
import PosterPlaceholder from "../assets/poster_placeholder.png";
import { VideosAndPhotos } from "../components/VideosAndPhotos";
import Cast from "../components/Cast";
import Review from "../components/Review";
import Recommendations from "../components/Recommendations";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovieById(params.id).then((response) => setMovie(response));
  }, [params.id]);

  return (
    <section className="min-h-screen">
      <div
        style={{
          backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
        }}
        className="bg-cover bg-no-repeat h-ful bg-fixed"
      >
        <div className="bg-gradient-to-b from-transparent	to-neutral-900 text-white h-full">
          <div className="md:w-5/6 mx-auto py-10">
            <div className="py-6 flex flex-col md:flex-row items-center gap-5 ">
              <div className="flex flex-col gap-3">
                <div className="text-3xl font-semibold font-dosis">
                  {movie.original_title}
                </div>
                <div className="font-semibold font-dosis">{movie.tagline}</div>
                <div className="flex gap-2 ">
                  <span className="border rounded-3xl px-2 py-1 text-sm">
                    {movie.status}
                  </span>
                  <span className="border rounded-3xl px-2 py-1 text-sm">
                    {movie.release_date}
                  </span>
                  <span className="border rounded-3xl px-2 py-1 text-sm">
                    {movie.runtime} minutes
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 border border-neutral-800 rounded-md bg-neutral-800 bg-opacity-50">
                <div className="w-16 h-16">
                  <RatingCircle rating={movie.vote_average} />
                </div>
                <span className="text-xs">{movie.vote_count} users voted</span>
              </div>
            </div>
            <div className="flex flex-col items-center  xl:flex-row gap-2">
              <div className="flex ">
                <img
                  className="h-full w-full object-cover "
                  src={
                    movie.poster_path
                      ? getPosterUrl(movie.poster_path)
                      : PosterPlaceholder
                  }
                  alt=""
                />
              </div>
              <div className="w-full h-full">
                <VideosAndPhotos movieId={params.id} />
              </div>
            </div>

            <div className="py-5 flex gap-3 text-white">
              {movie?.genres?.map((genre) => (
                <div
                  className="border rounded-3xl px-2 py-1 text-sm "
                  key={genre.id}
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <div>{movie.overview}</div>
            <Cast movieId={params.id} />
            <Review movieId={params.id} />
         
          </div>
          <Recommendations movieId={params.id} />
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
