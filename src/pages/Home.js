import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import { hero_1 } from "../components/Hero/Data";


const Home = () => {
  return (
    <>
      <HeroSection {...hero_1}/>

    </>
  );
};

export default Home;
