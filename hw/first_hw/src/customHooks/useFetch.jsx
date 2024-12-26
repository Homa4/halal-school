import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortish = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(url, {
          signal: abortish.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        setData(result.data);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortish.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
