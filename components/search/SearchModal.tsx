"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useModalContext } from "@/context/ModalContext";
import { useDebounce } from "@/hooks/useDebounce";
import { fetchData, fetchTrending } from "@/utils/http";

import Modal from "@/components/Modal";
import SearchBar from "@/components/search/SearchBar";
import SearchResultList from "@/components/search/SearchResultList";

export default function SearchModal() {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<{}[]>([]);
  const searchElement = useRef<HTMLInputElement>(null);

  const modalContext = useModalContext();

  const debouncedQuery = useDebounce(query);

  const { data: searchData, isLoading: isLoadingSearch } = useQuery({
    queryKey: ["films", debouncedQuery],
    queryFn: ({ signal }) => fetchData({ signal, query }),
    staleTime: 5000,
    enabled: debouncedQuery !== "",
  });

  const { data: trendingData } = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrending,
    staleTime: 10000,
    enabled: debouncedQuery === "",
  });

  function handleCloseSearch() {
    modalContext.hideSearch();
    setQuery("");
  }

  function handleChange() {
    if (searchElement.current) {
      setQuery(searchElement.current.value);
    }
  }

  useEffect(() => {
    if (searchData) {
      console.log(searchData);
      setSearchResults(searchData);
    }

    if (trendingData && !searchData && !isLoadingSearch) {
      setSearchResults(trendingData);
    }
  }, [searchData, trendingData, isLoadingSearch]);

  return (
    <Modal
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
