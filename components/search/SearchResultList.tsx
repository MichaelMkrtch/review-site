import { useCallback, useEffect, useState } from "react";
import { useSuspenseQueries } from "@tanstack/react-query";

import { type Movie, fetchMovieDetails } from "@/utils/fetchMovieDetails";
import SearchResult from "./SearchResult";

type SearchResultListProps = {
  results: Movie[];
};

export default function SearchResultList({ results }: SearchResultListProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [movieIDs, setMovieIDs] = useState<number[]>([]);

  useEffect(() => {
    let movieList: number[] = [];

    for (const result of results) {
      movieList.push(result.id);
    }

    setMovieIDs(movieList);
  }, [results]);

  const detailsQuery = useSuspenseQueries({
    queries: movieIDs.map((id) => ({
      queryKey: ["film details", id],
      queryFn: () => fetchMovieDetails({ id }),
      staleTime: 2 * 6 * 1000,
      // enabled: id > 0,
    })),
  });

  // const isFetched = detailsQuery.every((query) => query.isFetched);

  const movies: Movie[] = [];

  if (detailsQuery) {
    for (let movieDetail of detailsQuery) {
      movieDetail.data && movies.push(movieDetail.data);
    }
  }

  // This ensures handleKeyPress is only updated when necessary,
  // rather than on every re-render
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (selectedItemIndex < results.length) {
        if (event.key === "ArrowUp" && selectedItemIndex > 0) {
          setSelectedItemIndex((prevIndex) => prevIndex - 1);
        }
        if (
          event.key === "ArrowDown" &&
          selectedItemIndex < results.length - 1
        ) {
          setSelectedItemIndex((prevIndex) => prevIndex + 1);
        }
        if (event.key === "Enter" && selectedItemIndex >= 0) {
        }
      } else {
        setSelectedItemIndex(0);
      }
    },
    [selectedItemIndex, results],
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
      {movies.map((movie, index) => {
        return (
          <SearchResult
            key={movie.id}
            {...movie}
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
