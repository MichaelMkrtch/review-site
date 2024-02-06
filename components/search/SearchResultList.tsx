import { useCallback, useEffect, useState } from "react";

import SearchResult from "./SearchResult";

type SearchResultListProps = {
  results: {}[];
};

export default function SearchResultList({ results }: SearchResultListProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [movieResults, setMovieResults] = useState<{}[]>([]);

  useEffect(() => {
    setMovieResults(results);
  }, [results]);

  // This ensures handleKeyPress is only updated when necessary,
  // rather than on every re-render
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
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
          // pass movie data with context
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
      tabIndex={-1}
      className="mt-2 cursor-default select-none border-t border-[#434343] pt-1 outline-none"
    >
      {movieResults.map((movie: { [key: string]: any }, index) => {
        return (
          <SearchResult
            key={movie.id}
            movieName={movie.title}
            id={movie.id}
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
