import React from "react";
import { useParams } from "react-router-dom";

const Videos = () => {
  const params = useParams();
  return <div>Videos with movie id: {params.id}</div>;
};

export default Videos;
