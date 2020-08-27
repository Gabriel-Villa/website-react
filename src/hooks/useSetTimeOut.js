import { useEffect, useState } from "react";

const useSetTimeOut = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return {loader}
};

export default useSetTimeOut;
