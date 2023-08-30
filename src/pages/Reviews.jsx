import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../api";
import RatingCircle from "../components/RatingCircle";
import { BiConfused } from "react-icons/bi";
const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(params.id).then((response) => setReviews(response.results));
  }, [params.id]);

  return (
    <div className="w-5/6 mx-auto bg-white">
      <div className="text-2xl text-semibold py-5">User Reviews</div>
      <div className="flex flex-col  gap-20">
        {reviews?.map((review) => (
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

            <div className=" py-2 px-4 text-justify">
              {review.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
