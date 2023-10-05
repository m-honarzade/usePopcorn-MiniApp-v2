const WatchedSummary = ({ watchedMovies }) => {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating));
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));
  const avgRuntime = average(watchedMovies.map((movie) => movie.runtime));

  return (
    <div className=" mb-4 p-2 bg-[#343a40] rounded-md flex flex-col gap-y-2 border-b-[#343a40] border-b-[1px] pb-2">
      <h2 className="text-white font-semibold uppercase text-sm px-1">
        Movies you watched
      </h2>
      <div className="  flex flex-row items-center gap-x-4 text-sm font-semibold text-white">
        <p>
          <span>#️⃣</span>
          <span> {watchedMovies.length}</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
