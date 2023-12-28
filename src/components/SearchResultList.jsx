import { useCallback, useEffect, useState } from "react";

import SearchResult from "./SearchResult.jsx";

export default function SearchResultList({ results }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const filteredResults = results.slice(0, 5);

  // This ensures handleKeyPress is only updated when necessary,
  // rather than on every re-render
  const handleKeyPress = useCallback(
    (event) => {
      if (selectedItemIndex < filteredResults.length) {
        if (event.key === "ArrowUp" && selectedItemIndex > 0) {
          setSelectedItemIndex((prevIndex) => prevIndex - 1);
        }
        if (
          event.key === "ArrowDown" &&
          selectedItemIndex < filteredResults.length - 1
        ) {
          setSelectedItemIndex((prevIndex) => prevIndex + 1);
        }
        if (event.key === "Enter" && selectedItemIndex >= 0) {
          // select movie
        }
      } else {
        setSelectedItemIndex(0);
      }
    },
    [selectedItemIndex, filteredResults],
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
    <div tabIndex="-1" className="mt-3 border-t pt-2.5 outline-none">
      {filteredResults.map((movie, index) => {
        return (
          <SearchResult
            key={index}
            tabIndex="-1"
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
