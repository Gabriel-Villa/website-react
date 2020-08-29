import React from "react";
import url from "../config";
import useEffect from "../hooks/useFetch";
import Products from "./Products";
import { BiLineChart } from "react-icons/bi";

const Home = () => {
  const { products, error } = useEffect(`${url}&q=product&image_type=photo`);

  return (
    <>
      <div className="container p-5 mt-5">
        <h1>
          The most sold
          <BiLineChart className="pb-1" style={{ fontSize: "35px" }} />
        </h1>
        <div className="row">
          <Products data={products} />
        </div>
      </div>
    </>
  );
};

export default Home;
