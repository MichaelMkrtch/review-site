"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { searchMovies } from "@/utils/searchMovies";
import { fetchTrendingMovies } from "@/utils/fetchTrendingMovies";
import { useModalContext } from "@/context/ModalContext";
import { useDebounce } from "@/hooks/useDebounce";

import Modal from "@/components/Modal";
import SearchBar from "@/components/search/SearchBar";
import SearchResultList from "@/components/search/SearchResultList";

export interface SearchResult {
  id: number;
  title: string;
  directors: { name: string }[];
  release_date: string;
  poster_path: string;
  backdrop_path: string;
}

export default function SearchModal() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const searchElement = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce(query);

  const modalContext = useModalContext();

  const { data: trendingData } = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrendingMovies,
    staleTime: 1 * 60 * 1000,
    enabled: debouncedQuery === "",
  });

  const { data: searchData, isLoading: isLoadingSearch } = useQuery({
    queryKey: ["films", debouncedQuery],
    queryFn: ({ signal }) => searchMovies({ signal, query }),
    staleTime: 1 * 60 * 1000,
    enabled: debouncedQuery !== "",
  });

  useEffect(() => {
    if (searchData) {
      setSearchResults(searchData);
    }

    if (trendingData && !searchData && !isLoadingSearch) {
      setSearchResults(trendingData);
    }
  }, [searchData, trendingData, isLoadingSearch]);

  function handleCloseSearch() {
    setQuery("");
    modalContext.hideSearch();
  }

  function handleChange() {
    if (searchElement.current) {
      setQuery(searchElement.current.value);
    }
  }

  return (
    <Modal
      hasPadding={true}
      open={modalContext.type === "showSearch"}
      onClose={
        modalContext.type === "showSearch" ? handleCloseSearch : undefined
      }
    >
      <SearchBar ref={searchElement} query={query} onChange={handleChange} />
      <SearchResultList results={searchResults} />
    </Modal>
  );
}
