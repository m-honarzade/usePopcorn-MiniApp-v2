import MovieItem from "./MovieItem";

const MoviesList = ({ movies, onSelectedId }) => {
  return (
    <ul className="flex flex-col gap-y-4">
      {movies.map((movie) => (
        <MovieItem key={movies.imdbID} movie={movie} onSetId={onSelectedId} />
      ))}
    </ul>
  );
};

export default MoviesList;
