import { useCallback, useEffect, useState } from "react";

import SearchResult from "./SearchResult.jsx";

export default function SearchResultList({ results }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    setMovieResults(results.slice(0, 5));
  }, [results]);

  // This ensures handleKeyPress is only updated when necessary,
  // rather than on every re-render
  const handleKeyPress = useCallback(
    (event) => {
      if (selectedItemIndex < movieResults.length) {
        if (event.key === "ArrowUp" && selectedItemIndex > 0) {
          setSelectedItemIndex((prevIndex) => prevIndex - 1);
        }
        if (
          event.key === "ArrowDown" &&
          selectedItemIndex < movieResults.length - 1
        ) {
          setSelectedItemIndex((prevIndex) => prevIndex + 1);
        }
        if (event.key === "Enter" && selectedItemIndex >= 0) {
          //
        }
      } else {
        setSelectedItemIndex(0);
      }
    },
    [selectedItemIndex, movieResults],
  );

  // This ensures we don't remove and re-add event listeners on
  // each re-render, but only when handler changes
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div
      tabIndex="-1"
      className="mt-3 cursor-default select-none border-t pt-1 outline-none"
    >
      {movieResults.map((movie, index) => {
        return (
          <SearchResult
            key={index}
            posterPath={movie.poster_path}
            selectedItemIndex={selectedItemIndex}
            renderIndex={index}
          >
            {movie.title}
          </SearchResult>
        );
      })}
    </div>
  );
}
