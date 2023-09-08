import { useState } from "react";
import { useParams } from "react-router-dom";
import { getBackdropUrl, getYoutubeUrl } from "../utils";
import ReactPlayer from "react-player";
import { useGetSingleMovieQuery, useGetVideosQuery } from "../redux/apiSlice";
import { InfinitySpin } from "react-loader-spinner";

const Videos = () => {
  const params = useParams();

  const [currentVideo, setCurrentVideo] = useState(0);
  const { data: videos, error, isLoading } = useGetVideosQuery(params.id);
  const {
    data: movieData,
    error: movieError,
    isLoading: movieIsLoading,
  } = useGetSingleMovieQuery(params.id);
  return (
    <div
      className="min-h-screen  flex flex-col items-center justify-center text-white bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(${getBackdropUrl(movieData?.backdrop_path)})`,
      }}
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 z-50">
          <InfinitySpin color="#000000" />
        </div>
      )}
      <div className="flex py-10 md:w-5/6 lg:h-[600px] gap-5 flex-col lg:flex-row justify-center items-center drop-shadow-2xl bg-neutral-500 rounded-md bg-opacity-70 ">
        {videos?.results && (
          <div className="p-3 lg:px-5 flex flex-col justify-between gap-5 w-full lg:w-1/2 h-full">
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                style={{ position: "absolute", top: 0, left: 0 }}
                width={"100%"}
                height={"100%"}
                light
                controls
                url={getYoutubeUrl(videos?.results[currentVideo]?.key)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xl">
                {videos?.results[currentVideo]?.name}
              </span>
              <div className="flex gap-2">
                <span className="text-sm border rounded-lg w-fit px-2 py-1">
                  {videos?.results[currentVideo]?.type}
                </span>
                <span className="text-sm border rounded-lg w-fit px-2 py-1">
                  {new Date(
                    videos?.results[currentVideo]?.published_at
                  ).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className=" flex flex-col gap-2 h-full lg:w-[640px]  overflow-y-scroll">
          {videos?.results?.map((video, index) => (
            <div
              className={`border p-1 rounded-md transition duration-600 hover:bg-neutral-800 ${
                index === currentVideo
                  ? "border-neutral-800 bg-neutral-800"
                  : ""
              }`}
              key={video.id}
              onClick={() => setCurrentVideo(index)}
            >
              {video.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
