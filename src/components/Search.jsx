import { useState } from "react";

const Search = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-1/2 h-10 rounded-lg bg-[#7950f2] text-[#adb5bd] px-4 "
    />
  );
};

export default Search;
