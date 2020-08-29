import React from "react";
import url from "../config";
import Loading from "../components/Loader";
import useEffect from "../hooks/useFetch";
import FatalError from "./500";
import Products from "./Products";
import Pagination from '../components/Pagination';
import { BiLineChart } from "react-icons/bi";

const Home = () => {
  const { products, loading, currentPage, setCurrentPage, postsPerPage,  error } = useEffect(`${url}&q=product&image_type=photo`);

  if(loading)
    return <Loading />
   
  if(error)
    return <FatalError />  


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);  

  const paginate = (pageNuber) => setCurrentPage(pageNuber);

  return (
    <>
      <div className="container p-5 mt-5">
        <h1>
          The most sold
          <BiLineChart className="pb-1" style={{ fontSize: "35px" }} />
        </h1>
        <div className="row">
          <Products data={currentPosts} />
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
      </div>
    </>
  );
};

export default Home;
