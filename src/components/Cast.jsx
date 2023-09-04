import { getPosterUrl } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import CastPlaceholder from "../assets/cast_placeholder.png";
import { useGetCastQuery } from "../redux/apiSlice";
const breakpoints = {
  640: {
    slidesPerView: 4,
    spaceBetween: 2,
  },

  1024: {
    slidesPerView: 6,
    spaceBetween: 3,
  },

  1536: {
    slidesPerView: 8,
    spaceBetween: 4,
  },
  1875: {
    slidesPerView: 10,
    spaceBetween: 5,
  },
};
const Cast = ({ movieId }) => {
  const { data, error, isLoading } = useGetCastQuery(movieId);
  return (
    <section className="my-5">
      <div className="my-3 flex gap-1 ">
        <span>Director:</span>
        <span className="font-semibold">
          {
            data?.crew.find((crew_member) => crew_member.job === "Director")
              ?.name
          }
        </span>
      </div>

      <Swiper
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={3}
        breakpoints={breakpoints}
        spaceBetween={1}
        modules={[Scrollbar, Autoplay]}
      >
        {data &&
          data?.cast?.map((cast_member) => (
            <SwiperSlide key={cast_member.credit_id}>
              <div className="flex flex-wrap gap-2 p-2 bg-slate-600 bg-opacity-40 rounded-md w-36 h-48 items-center justify-center mb-10 select-none">
                <div className="w-28 h-28 rounded-full overflow-hidden ">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      cast_member.profile_path
                        ? getPosterUrl(cast_member.profile_path)
                        : CastPlaceholder
                    }
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-semibold">
                    {cast_member.name}
                  </span>
                  <span className="text-xs">{cast_member.character}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Cast;
