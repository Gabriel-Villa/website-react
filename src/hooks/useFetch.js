import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setProducts(data.hits);
      } catch (error) {
        setError(error);
      }
    };
    fetchImages();
  }, [url]);

  return { products, error };
};

export default useFetch;
