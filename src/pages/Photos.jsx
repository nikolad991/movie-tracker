import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBackdropUrl, getImages } from "../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
const Photos = () => {
  const [images, setImages] = useState({});
  const params = useParams();
  const [imageIndex, setImageIndex] = useState(3);
  useEffect(() => {
    getImages(params.id).then((response) => setImages(response));
  }, [params.id]);
  return (
    images.backdrops && (
      <div
        className="h-screen bg-cover bg-blend-overlay bg-zinc-900 transition-all duration-1000"
        style={{
          backgroundImage: `url(${getBackdropUrl(
            images?.backdrops[imageIndex]?.file_path
          )})`,
        }}
      >
        <div className="h-1/4 md:h-1/2 lg:h-2/3 aspect-[16/9] mx-auto">
          <img
            className="h-full w-full object-cover "
            src={getBackdropUrl(images?.backdrops[imageIndex]?.file_path)}
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
            {images?.backdrops?.map((photo, index) => (
              <SwiperSlide key={index} className="py-7">
                <div
                  className="h-20 aspect-[16/9] "
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
