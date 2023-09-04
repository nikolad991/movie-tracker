import { useParams } from "react-router-dom";
import RatingCircle from "../components/RatingCircle";
import { BiConfused } from "react-icons/bi";
import { useGetReviewsQuery } from "../redux/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
const Reviews = () => {
  const params = useParams();
  const { data: reviewsData, error, isLoading } = useGetReviewsQuery(params.id);
  return (
    <div className=" bg-white">
      <div className="w-5/6 mx-auto">
        <div className="text-2xl text-semibold py-5">User Reviews</div>
        {isLoading && <InfinitySpin color="#000000" />}
        <div className="flex flex-col  gap-10">
          {reviewsData?.results.map((review) => (
            <div
              key={review.id}
              className="flex flex-col bg-slate-600 bg-opacity-40 gap-3  rounded-md "
            >
              <div className="flex flex-col justify-between p-2 bg-neutral rounded-md rounded-r-none ">
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
