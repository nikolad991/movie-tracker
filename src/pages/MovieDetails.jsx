import { useParams } from "react-router-dom";
import { getBackdropUrl, getPosterUrl } from "../utils";
import RatingCircle from "../components/RatingCircle";
import PosterPlaceholder from "../assets/poster_placeholder.png";
import { VideosAndPhotos } from "../components/VideosAndPhotos";
import Cast from "../components/Cast";
import Review from "../components/Review";
import Recommendations from "../components/Recommendations";
import { useGetSingleMovieQuery } from "../redux/apiSlice";
import { InfinitySpin } from "react-loader-spinner";

const MovieDetails = () => {
  const params = useParams();
  const {
    data: movieData,
    error,
    isLoading,
  } = useGetSingleMovieQuery(params.id);
  return (
    <section className="min-h-screen">
      {isLoading && (
        <div className="flex items-center justify-center">
          <InfinitySpin color="#000000" />
        </div>
      )}
      {movieData && (
        <div
          style={{
            backgroundImage: `url(${getBackdropUrl(movieData?.backdrop_path)})`,
          }}
          className="bg-cover bg-no-repeat h-ful bg-fixed"
        >
          <div className="bg-gradient-to-b from-transparent	to-neutral-900 text-white h-full">
            <div className="md:w-5/6 mx-auto py-10">
              <div className="py-6 flex flex-col md:flex-row items-center gap-5 ">
                <div className="flex flex-col gap-3">
                  <div className="text-3xl font-semibold font-dosis">
                    {movieData?.original_title}
                  </div>
                  <div className="font-semibold font-dosis">
                    {movieData?.tagline}
                  </div>
                  <div className="flex gap-2 ">
                    <span className="border rounded-3xl px-2 py-1 text-sm">
                      {movieData?.status}
                    </span>
                    <span className="border rounded-3xl px-2 py-1 text-sm">
                      {movieData?.release_date}
                    </span>
                    <span className="border rounded-3xl px-2 py-1 text-sm">
                      {movieData?.runtime} minutes
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 border border-neutral-800 rounded-md bg-neutral-800 bg-opacity-50">
                  <div className="w-16 h-16">
                    <RatingCircle rating={movieData?.vote_average} />
                  </div>
                  <span className="text-xs">
                    {movieData?.vote_count} users voted
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center  xl:flex-row gap-1   xl:h-[400px] 2xl:h-[500px]">
                <div className="flex h-[500px] md:h-[600px]  lg:h-full aspect-[2/3] ">
                  <img
                    className="h-full w-full object-cover "
                    src={
                      movieData.poster_path
                        ? getPosterUrl(movieData?.poster_path)
                        : PosterPlaceholder
                    }
                    alt=""
                  />
                </div>
                <div className="h-full w-full ">
                  <VideosAndPhotos movieId={params.id} />
                </div>
              </div>

              <div className="py-5 px-2 flex gap-3 text-white">
                {movieData?.genres?.map((genre) => (
                  <div
                    className="border rounded-3xl px-2 py-1 text-sm "
                    key={genre.id}
                  >
                    {genre.name}
                  </div>
                ))}
              </div>
              <div className="p-1">{movieData?.overview}</div>
              <Cast movieId={params.id} />
              <Review movieId={params.id} />
            </div>
            <Recommendations movieId={params.id} />
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieDetails;
