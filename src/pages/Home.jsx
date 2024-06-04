import React from "react";
import Trending from "../components/Trending";
import HeroSlider from "../components/HeroSlider";
const Home = () => {
  return (
    <div className="py-20">
     
      <HeroSlider />
      <Trending />
    </div>
  );
};

export default Home;
