import { useEffect, useState } from "react";

const useMovies = (query, KEY) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies!");

        const data = await res.json();
        console.log(data);
        if (data.Response === "False") throw new Error("Movie not found!");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    // callback?.();
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query, KEY]);
  return { movies, isLoading, error };
};

export default useMovies;
