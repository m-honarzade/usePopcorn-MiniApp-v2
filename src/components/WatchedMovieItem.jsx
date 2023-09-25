const WatchedMovieItem = ({ movie }) => {
  return (
    <li className="grid grid-cols-[10%_90%] gap-x-3 border-b-[#343a40] border-b-[1px] pb-2">
      <div className="flex justify-end">
        <img src={movie.Poster} alt="filmPoster" className="w-8 h-12" />
      </div>

      <div className="flex flex-col text-white gap-y-2">
        <h3 className="text-sm font-semibold">{movie.Title}</h3>
        <div className="flex flex-row gap-x-5 text-xs">
          <div className="flex flex-row items-center gap-x-1">
            <span>⭐</span>
            <span className="text-xs ">{movie.Year}</span>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <span>🌟</span>
            <span className="text-xs ">{movie.Year}</span>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <span>⏳</span>
            <span className="text-xs ">{movie.Year}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WatchedMovieItem;
