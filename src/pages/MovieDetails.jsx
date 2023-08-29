import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBackdropUrl, getMovieById, getPosterUrl } from "../api";
import ReactPlayer from "react-player";
import RatingCircle from "../components/RatingCircle";
import PosterPlaceholder from "../assets/poster_placeholder.png";
import { VideosAndPhotos } from "../components/VideosAndPhotos";
import Cast from "../components/Cast";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovieById(params.id).then((response) => setMovie(response));
  }, []);

  return (
    <section className="min-h-screen">
      <div
        style={{
          backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
        }}
        className="bg-cover bg-no-repeat h-full"
      >
        <div className="bg-gradient-to-b from-transparent	to-neutral-900 text-white h-full">
          <div className="w-5/6 mx-auto py-10">
            <div className="py-6 flex items-center gap-20">
              <div>
                <div className="text-3xl font-semibold">
                  {movie.original_title}
                </div>
                <div className="font-semibold">{movie.tagline}</div>
                <div className="flex gap-2 ">
                  <span>{movie.status}</span>
                  <span>{movie.release_date}</span>
                  <span>{movie.runtime} minutes</span>
                </div>
              </div>
              <div className="w-20 h-20">
                <RatingCircle rating={movie.vote_average} />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-60">
                <img
                  className="h-full w-full"
                  src={
                    movie.poster_path
                      ? getPosterUrl(movie.poster_path)
                      : PosterPlaceholder
                  }
                  alt=""
                />
              </div>
              <div>
                {/* <ReactPlayer
                  light
                  url="https://www.youtube.com/watch?v=uYPbbksJxIg"
                /> */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
