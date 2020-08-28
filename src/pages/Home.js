import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import Data  from "../components/Hero/Data";


const Home = () => {
  return (
    <>
      {
        Data.map((hero) =>{
          return (
            <HeroSection {...hero}/>
          )
        })
      }
    </>
  );
};

export default Home;
