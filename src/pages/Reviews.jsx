import { useParams } from "react-router-dom";
import RatingCircle from "../components/RatingCircle";
import { BiConfused } from "react-icons/bi";
import { useGetReviewsQuery, useGetSingleMovieQuery } from "../redux/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import { getBackdropUrl } from "../utils";
const Reviews = () => {
  const params = useParams();
  const { data: reviewsData, error, isLoading } = useGetReviewsQuery(params.id);
  const {
    data: movieData,
    error: movieError,
    isLoading: movieIsLoading,
  } = useGetSingleMovieQuery(params.id);
  return (
    <div
      className="bg-cover bg-fixed bg-no-repeat bg-slate-600 bg-blend-overlay py-10"
      style={{
        backgroundImage: `url(${getBackdropUrl(movieData?.backdrop_path)})`,
      }}
    >
      <div className="w-5/6 mx-auto">
        <div className="text-2xl text-semibold py-5 text-white">User Reviews</div>
        {isLoading && <InfinitySpin color="#000000" />}
        <div className="flex flex-col  gap-4">
          {reviewsData?.results.map((review) => (
            <div
              key={review.id}
              className="flex flex-col lg:flex-row bg-slate-600 bg-opacity-80 gap-3 text-white  rounded-md "
            >
              <div className="flex flex-col justify-around items-center p-2 bg-neutral rounded-md rounded-r-none text-center ">
                <div className="font-semibold">{review.author}</div>
                <div className="w-20 h-20">
                  {review.author_details.rating ? (
                    <RatingCircle rating={review.author_details.rating} />
                  ) : (
                    <BiConfused size={82} color="yellow" />
                  )}
                </div>
              </div>
              <div className=" py-2 px-4 text-justify">{review.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
