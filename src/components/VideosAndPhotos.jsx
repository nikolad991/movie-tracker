import { getYoutubeUrl } from "../utils";
import ReactPlayer from "react-player";
import { MdVideoLibrary } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  useGetImagesQuery,
  useGetTrailersQuery,
  useGetVideosQuery,
} from "../redux/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
export const VideosAndPhotos = ({ movieId }) => {
  const navigate = useNavigate();
  const { data: videosData, error, isLoading } = useGetVideosQuery(movieId);
  const {
    data: trailersData,
    error: trailersError,
    isLoading: trailersIsLoading,
  } = useGetTrailersQuery(movieId);
  const {
    data: imagesData,
    error: imagesError,
    isLoading: imagesIsLoading,
  } = useGetImagesQuery(movieId);
  return (
    <div className="flex flex-col xl:flex-row gap-1 h-full w-full">
      <div className="relative aspect-video h-full w-full">
        {trailersIsLoading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <InfinitySpin color="#000000" />
          </div>
        )}
        {trailersData && (
          <ReactPlayer
            style={{ position: "absolute", top: 0, left: 0 }}
            width={"100%"}
            height={"100%"}
            light
            controls
            url={getYoutubeUrl(
              trailersData[Math.floor(Math.random() * trailersData?.length)]
                ?.key
            )}
          />
        )}
      </div>
      <div className="flex xl:flex-col gap-1 ">
        <div
          className="flex xl:flex-col flex-1 gap-1 p-1 xl:p-14 items-center justify-center uppercase bg-gradient-to-tl from-neutral-600 to-neutral-800 font-semibold hover:to-neutral-900 cursor-pointer xl:h-1/2 xl:aspect-square "
          onClick={() => {
            navigate(`/videos/${movieId}`);
          }}
        >
          <span className="text-xl xl:text-4xl">
            <MdVideoLibrary />
          </span>
          {isLoading ? (
            <InfinitySpin color="#000000" width="100" />
          ) : (
            <span>{videosData?.results?.length} videos</span>
          )}
        </div>
        <div
          className="flex xl:flex-col flex-1 gap-1 p-1 xl:p-14  items-center justify-center uppercase bg-gradient-to-tr to-neutral-800 from-neutral-600 font-semibold hover:to-neutral-900 cursor-pointer xl:h-1/2 xl:aspect-square"
          onClick={() => {
            navigate(`/photos/${movieId}`);
          }}
        >
          <span className="text-xl xl:text-4xl">
            <IoMdPhotos />
          </span>
          {imagesIsLoading ? (
            <InfinitySpin color="#000000" width="100" />
          ) : (
            <span>{imagesData?.backdrops?.length} photos</span>
          )}
        </div>
      </div>
    </div>
  );
};
