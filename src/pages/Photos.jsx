import { useState } from "react";
import { useParams } from "react-router-dom";
import { getBackdropUrl } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useGetImagesQuery } from "../redux/apiSlice";
const Photos = () => {
  const params = useParams();
  const [imageIndex, setImageIndex] = useState(0);

  const { data: photosData, error, isLoading } = useGetImagesQuery(params.id);
  return (
    photosData?.backdrops && (
      <div
        className="h-screen bg-cover bg-blend-overlay bg-zinc-900 transition-all duration-1000 pt-10"
        style={{
          backgroundImage: `url(${getBackdropUrl(
            photosData?.backdrops[imageIndex]?.file_path
          )})`,
        }}
      >
        <div className="h-1/4 md:h-1/2 lg:h-2/3 aspect-[16/9] mx-auto">
          <img
            className="h-full w-full object-cover "
            src={getBackdropUrl(photosData?.backdrops[imageIndex]?.file_path)}
            alt=""
          />
        </div>
        <div className="flex flex-wrap">
          <Swiper
            modules={[Scrollbar]}
            slidesPerView={12}
            scrollbar={{
              hide: false,
            }}
          >
            {photosData?.backdrops?.map((photo, index) => (
              <SwiperSlide key={index} className="py-7">
                <div
                  className={`h-20 p-1 rounded-md aspect-[16/9] transition-all duration-600 ${
                    index === imageIndex
                      ? " bg-gradient-to-b from-red-400 to-red-700 "
                      : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                >
                  <img
                    className="h-full w-full object-cover"
                    src={getBackdropUrl(photo.file_path)}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
  );
};

export default Photos;
