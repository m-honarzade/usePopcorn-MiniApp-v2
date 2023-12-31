import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import MoviesList from "./components/MoviesList";
import NumResults from "./components/NumResults";
import Search from "./components/Search";

import WatchedMoviesList from "./components/WatchedMoviesList";
import WatchedSummary from "./components/WatchedSummary";
import Box from "./layouts/Box";
import Main from "./layouts/Main";
import Navbar from "./layouts/Navbar";
import Loading from "./components/Loading";

import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import useMovies from "./hooks/useMovies";
import useLocalStorageState from "./hooks/useLocalStorageState";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

// const tempQuery = "interstellar";
const KEY = "7418308e";

// ***************************************************************

function App() {
  // const [movies, setMovies] = useState([]);
  // const [watchedMovie, setWatchedMovie] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query, KEY);

  const [watchedMovie, setWatchedMovie] = useLocalStorageState([], "watched");

  const closeSelectedMovieHandler = () => {
    setSelectedId(null);
  };
  const selectedIdHandler = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const watchedMovieHandler = (movie) => {
    setWatchedMovie((watchedMovie) => [...watchedMovie, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watchedMovie, movie]));
  };

  const deleteWatchedMovieHandler = (id) => {
    setWatchedMovie((watched) =>
      watched.filter((movie) => movie.imdbID !== id)
    );
  };

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const fetchMovies = async () => {
  //     try {
  //       setIsLoading(true);
  //       setError("");
  //       const res = await fetch(
  //         `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
  //         { signal: controller.signal }
  //       );

  //       if (!res.ok)
  //         throw new Error("Something went wrong with fetching movies!");

  //       const data = await res.json();
  //       console.log(data);
  //       if (data.Response === "False") throw new Error("Movie not found!");

  //       setMovies(data.Search);
  //       setError("");
  //     } catch (err) {
  //       if (err.name !== "AbortError") setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   if (query.length < 3) {
  //     setMovies([]);
  //     setError("");
  //     return;
  //   }
  //   closeSelectedMovieHandler();
  //   fetchMovies();
  //   return () => {
  //     controller.abort();
  //   };
  // }, [query]);

  // useEffect(() => {
  //   localStorage.setItem("watched", JSON.stringify(watchedMovie));
  // }, [watchedMovie]);

  return (
    <>
      <div className=" min-h-screen flex flex-col  ">
        <div className="">
          <Navbar>
            <Logo />
            <Search query={query} setQuery={setQuery} />
            <NumResults movies={movies} />
          </Navbar>
        </div>

        <Main>
          <Box>
            {isLoading && <Loading />}
            {!isLoading && !error && (
              <MoviesList movies={movies} onSelectedId={selectedIdHandler} />
            )}
            {error && <ErrorMessage message={error} />}
          </Box>
          <Box>
            {selectedId ? (
              <MovieDetails
                KEY={KEY}
                selectedId={selectedId}
                onCloseHandler={closeSelectedMovieHandler}
                onAddWatchedMovie={watchedMovieHandler}
                watchedMovie={watchedMovie}
              />
            ) : (
              <WatchedMoviesList
                watchedMovies={watchedMovie}
                onDeleteMovie={deleteWatchedMovieHandler}
              >
                <WatchedSummary watchedMovies={watchedMovie} />
              </WatchedMoviesList>
            )}
          </Box>
        </Main>
      </div>
    </>
  );
}

export default App;
