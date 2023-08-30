import React, { useState, useEffect } from "react";
import { getImages, getVideos, getYoutubeUrl } from "../api";
import ReactPlayer from "react-player";
import { MdVideoLibrary } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const VideosAndPhotos = ({ movieId }) => {
  const [videos, setVideos] = useState({});
  const [trailers, setTrailers] = useState([]);
  const [images, setImages] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getVideos(movieId).then((response) => setVideos(response));
  }, [movieId]);

  useEffect(() => {
    let trailers = videos.results?.filter((video) => video.type === "Trailer");
    setTrailers(trailers);
  }, [videos]);
  useEffect(() => {
    getImages(movieId).then((response) => setImages(response));
  }, [movieId]);

  return (
    <div className="flex flex-col xl:flex-row h-[450px] gap-1 ">
      <div className="relative pt-[56.25%] xl:w-[30vw]">
      
        {trailers && (
          <ReactPlayer
            style={{ position: "absolute", top: 0, left: 0 }}
            width={"100%"}
            height={"100%"}
            light
            controls
            url={getYoutubeUrl(
              trailers[Math.floor(Math.random() * trailers?.length)]?.key
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
          <span>{videos?.results?.length} videos</span>
        </div>
        <div
          className="flex xl:flex-col flex-1 gap-1 xl:p-14 border items-center justify-center uppercase bg-gradient-to-t from-neutral-600 to-neutral-800 font-semibold hover:to-neutral-900 cursor-pointer"
          onClick={() => {
            navigate(`/photos/${movieId}`);
          }}
        >
          <span className="text-4xl">
            <IoMdPhotos />
          </span>
          <span>{images?.backdrops?.length} photos</span>
        </div>
      </div>
    </div>
  );
};
