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
    <div className="flex gap-1">
      <div>
        {/* { trailers[Math.floor(Math.random() * trailers?.length)]?.name} */}
        {trailers && (
          <ReactPlayer
            light
            controls
            url={getYoutubeUrl(
              trailers[Math.floor(Math.random() * trailers?.length)]?.key
            )}
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1 p-14 border items-center uppercase bg-gradient-to-t from-neutral-600 to-neutral-800 font-semibold hover:to-neutral-900"  onClick={() => {
            navigate(`/videos/${movieId}`);
          }}>
          <span className="text-4xl">
            <MdVideoLibrary />
          </span>
          <span>{videos?.results?.length} videos</span>
        </div>
        <div
          className="flex flex-col gap-1 p-14 border items-center uppercase bg-gradient-to-t from-neutral-600 to-neutral-800 font-semibold hover:to-neutral-900 cursor-pointer"
          onClick={() => {
            navigate(`/photos/${movieId}`);
          }}
        >
          <span className="text-4xl">
            <IoMdPhotos />
          </span>
          <span>{images?.backdrops?.length} photos</span>
          {/* <span>{images?.posters?.length} posters</span>
          <span>{images?.logos?.length} logos</span> */}
        </div>
      </div>
      {/* {trailers?.length}
      {trailers?.map((video) => (
        <div className="flex gap-3 border" key={video.id}>
      
          <span>{video.name}</span>
          <span className="text-red-500">{video.type}</span>
          <span>{video.key}</span>
        </div>
      ))} */}
    </div>
  );
};
