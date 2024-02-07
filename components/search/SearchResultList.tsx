import { useCallback, useEffect, useState } from "react";
import { useQueries } from "@tanstack/react-query";

import { fetchMovieDetails } from "@/utils/fetchMovieDetails";
import SearchResult from "./SearchResult";

type SearchResultListProps = {
  results: { id: number }[];
};

export default function SearchResultList({ results }: SearchResultListProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [movieIDs, setMovieIDs] = useState<number[]>([]);

  useEffect(() => {
    let movies: number[] = [];

    for (const result of results) {
      movies.push(result.id);
    }

    setMovieIDs(movies);
  }, [results]);

  const queryResults = useQueries({
    queries: movieIDs.map((id) => ({
      queryKey: ["film details", id],
      queryFn: () => fetchMovieDetails({ id }),
      staleTime: 2 * 6 * 1000,
      enabled: id > 0,
    })),
  });

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
      {queryResults.map((movies, index) => {
        if (movies.data) {
          const { id, title, release_date, poster_path, credits } = movies.data;
          const directors = credits.crew.filter(
            (crewMember: { job: string }) => crewMember.job === "Director",
          );

          return (
            <SearchResult
              key={id}
              id={id}
              movieName={title}
              directors={directors}
              releaseDate={release_date}
              posterPath={poster_path}
              selectedItemIndex={selectedItemIndex}
              renderIndex={index}
            >
              {movies.data.title}
            </SearchResult>
          );
        }
      })}
    </div>
  );
}
