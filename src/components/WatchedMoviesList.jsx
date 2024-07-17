import WatchedMovieItem from "./WatchedMovieItem";
import WatchedSummary from "./WatchedSummary";

const WatchedMoviesList = ({ children, watchedMovies, onDeleteMovie }) => {
  return (
    <>
      {children}
      <ul className="flex flex-col gap-y-4">
        {watchedMovies.map((movie) => (
          <WatchedMovieItem
            key={movie.imdbID}
            movie={movie}
            onDelete={onDeleteMovie}
          />
        ))}
      </ul>
    </>
  );
};

export default WatchedMoviesList;
