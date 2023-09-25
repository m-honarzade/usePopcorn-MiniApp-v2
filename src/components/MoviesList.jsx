import MovieItem from "./MovieItem";

const MoviesList = ({ movies }) => {
  return (
    <ul className="flex flex-col gap-y-4">
      {movies.map((movie) => (
        <MovieItem key={movies.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
