import React, { useState, useEffect } from "react";
import { getImages, getVideos, getYoutubeUrl } from "../api";
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
  const [images, setImages] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getImages(movieId).then((response) => setImages(response));
  }, [movieId]);
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
    <div className="flex flex-col xl:flex-row gap-1 items-center">
      <div className="relative aspect-video h-full w-full">
        {trailersIsLoading && <InfinitySpin color="#000000" />}
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
      <div className="flex xl:flex-col gap-1">
        <div
          className="flex xl:flex-col flex-1 gap-1 xl:p-14 border items-center justify-center uppercase bg-gradient-to-t from-neutral-600 to-neutral-800 font-semibold hover:to-neutral-900 cursor-pointer"
          onClick={() => {
            navigate(`/videos/${movieId}`);
          }}
        >
          <span className="text-4xl">
            <MdVideoLibrary />
          </span>
          {isLoading ? (
            <InfinitySpin color="#000000" width="100" />
          ) : (
            <span>{videosData?.results?.length} videos</span>
          )}
        </div>
        <div
          className="flex xl:flex-col flex-1 gap-1 xl:p-14 border items-center justify-center uppercase bg-gradient-to-t from-neutral-600 to-neutral-800 font-semibold hover:to-neutral-900 cursor-pointer"
          onClick={() => {
            navigate(`/photos/${movieId}`);
          }}
        >
          <span className="text-xl">
            <IoMdPhotos />
          </span>
          {imagesIsLoading ? (
            <InfinitySpin color="#000000" width="100" />
          ) : (
            <div className="flex gap-2">
              <span>{imagesData?.backdrops?.length}</span>
              <span>photos</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
