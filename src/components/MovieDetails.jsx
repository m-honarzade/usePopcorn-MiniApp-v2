import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loading from "./Loading";

const MovieDetails = ({
  selectedId,
  onCloseHandler,
  KEY,
  onAddWatchedMovie,
  watchedMovie,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const isWatched = watchedMovie
    .map((movie) => movie.imdbID)
    .includes(selectedId);

  const watchedMovieUserRating = watchedMovie.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  useEffect(() => {
    const callBack = (e) => {
      if (e.code === "Escape") {
        onCloseHandler();
      }
    };

    document.addEventListener("keydown", callBack);
    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [onCloseHandler]);

  const addHandler = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatchedMovie(newWatchedMovie);
    onCloseHandler();
  };

  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-y-4  text-center">
          <div className="flex flex-row bg-[#343a40]">
            <div className="relative">
              <img src={poster} alt="poster of movie" className="w-40 " />
              <span
                role="button"
                onClick={onCloseHandler}
                className="absolute left-2 top-2 bg-white rounded-full px-1 py-[0.5] font-bold text-black"
              >
                &larr;
              </span>
            </div>
            <div className="flex flex-col text-white ml-4 text-left w-full gap-y-4 ">
              <h4 className="font-bold text-lg"> {title}</h4>
              <p className="text-xs">
                {released}. {runtime}
              </p>
              <p className="text-xs">{genre}</p>
              <p className="text-xs">
                <span>⭐</span> {imdbRating} IMDb rating
              </p>
            </div>
          </div>
          <div className="block-flex flex-col ">
            {!isWatched ? (
              <>
                <StarRating
                  maxRating={10}
                  textColor={"gold"}
                  starColor={"gold"}
                  starLineColor={"gold"}
                  textSize={"md"}
                  onSetRating={setUserRating}
                />
                <div className="">
                  {userRating > 0 ? (
                    <button
                      onClick={addHandler}
                      className="text-white bg-[#6741d9] text-xs px-20 py-2 rounded-full mt-2"
                    >
                      + Add to list
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </>
            ) : (
              <p className="text-white">
                yor rated this movie {watchedMovieUserRating}🌟
              </p>
            )}

            <div className="text-white text-left text-xs px-16 py-4">
              <p className="mb-2">{plot}</p>
              <p className="mb-2">Staring {actors}</p>
              <p>Directed by {director}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
