import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setProducts(data.hits);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchImages();
  }, [url]);

  return { products, loading, currentPage, setCurrentPage, postsPerPage,  error };
};

export default useFetch;
