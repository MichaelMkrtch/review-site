"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useModalContext } from "@/context/ModalContext";
import { useDebounce } from "@/hooks/useDebounce";
import { fetchData } from "@/utils/http";

import Modal from "@/components/Modal";
import SearchBar from "@/components/search/SearchBar";
import SearchResultList from "@/components/search/SearchResultList";

export default function SearchModal() {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<{}[]>([]);
  const searchElement = useRef<HTMLInputElement>(null);

  const modalContext = useModalContext();

  const debouncedQuery = useDebounce(query);

  const { data } = useQuery({
    queryKey: ["films", debouncedQuery],
    queryFn: ({ signal }) => fetchData({ signal, query }),
    staleTime: 5000,
    enabled: debouncedQuery !== "",
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
    if (data) {
      console.log(data)
      setSearchResults(data);
    }
  }, [data]);

  return (
    <Modal open={modalContext.type === "search"} onClose={handleCloseSearch}>
      <SearchBar ref={searchElement} query={query} onChange={handleChange} />
      <SearchResultList results={searchResults} />
    </Modal>
  );
}
