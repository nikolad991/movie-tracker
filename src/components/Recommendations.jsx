import MovieSwiper from "./MovieSwiper";
import { useGetRecommendationsQuery } from "../redux/apiSlice";
import { InfinitySpin } from "react-loader-spinner";

const Recommendations = ({ movieId }) => {
  const { data, error, isLoading } = useGetRecommendationsQuery(movieId);
  return (
    <div className="px-5 py-10 w-5/6 mx-auto">
      <h1 className="text-3xl font-dosis py-4 text-whwite">
        Recommended Movies
      </h1>
      {isLoading && <InfinitySpin color="#000000" />}
      {data && <MovieSwiper moviesData={data?.results} />}
    </div>
  );
};

export default Recommendations;
