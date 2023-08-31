import React, { useState, useEffect } from "react";
import { getReviews } from "../api";
import RatingCircle from "./RatingCircle";
import { BiConfused } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
const Review = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getReviews(movieId).then((response) => setReviews(response.results));
  }, [movieId]);
  return (
    <div className="">
      <div className="text-2xl text-semibold py-5">User Reviews</div>
      <div className="flex flex-col lg:flex-row gap-2">
        {reviews?.slice(0, 2).map((review) => (
          <div
            key={review.id}
            className="flex bg-slate-600 bg-opacity-40 gap-3  rounded-md "
          >
            <div className="w-1/6 flex flex-col items-center justify-between p-2 bg-neutral rounded-md rounded-r-none ">
              <div className="font-semibold text-center">{review.author}</div>
              <div className="w-20 h-20">
                {review.author_details.rating ? (
                  <RatingCircle rating={review.author_details.rating} />
                ) : (
                  <BiConfused size={82} color="yellow" />
                )}
              </div>
            </div>

            <div className="w-5/6 text-sm py-2 px-4 text-justify">
              {review.content.slice(0, 500)}
              {review.content.length > 500 && (
                <>
                  <span>... </span>
                  <button
                    className="text-neutral-400 "
                    onClick={() => {
                      navigate(`/reviews/${movieId}`);
                    }}
                  >
                    Read More
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-lg text-semibold my-5 py-3 px-2 border w-fit hover:bg-white hover:text-black">
        <Link to={`/reviews/${movieId}`}>See All {reviews.length} Reviews</Link>
      </div>
    </div>
  );
};

export default Review;
