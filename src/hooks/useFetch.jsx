import { useState, useEffect } from "react";
import { fetchDateFromAPi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    fetchDateFromAPi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
