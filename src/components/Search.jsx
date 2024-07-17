import { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
    const callBack = (e) => {
      if (document.activeElement === inputEl.current) {
        return;
      }
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    };

    document.addEventListener("keydown", callBack);
    return document.addEventListener("keydown", callBack);
  }, [setQuery]);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
      className="w-1/2 h-10 rounded-lg bg-[#7950f2] text-[#adb5bd] px-4 "
    />
  );
};

export default Search;
