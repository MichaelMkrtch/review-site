"use client";

import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useModalContext } from "@/context/ModalContext";
import { useDebounce } from "@/hooks/useDebounce";
import { fetchData } from "@/utils/http";

import Modal from "@/components/Modal";
import SearchBar from "@/components/search/SearchBar";

export default function SearchModal() {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState([]);
  const searchElement = useRef<HTMLInputElement>(null);

  const modalContext = useModalContext();

  const debouncedQuery = useDebounce(query);

  const { data } = useQuery({
    queryKey: ["films", debouncedQuery],
    queryFn: ({ signal }) => fetchData({ signal, query }),
    enabled: query !== "",
  });

  function handleCloseSearch() {
    modalContext.hideSearch();
  }

  function handleChange() {
    if (searchElement.current) {
      setQuery(searchElement.current.value);
    }
  }

  if (data) {
    console.log(data);
  }

  return (
    <Modal open={modalContext.type === "search"} onClose={handleCloseSearch}>
      <SearchBar ref={searchElement} query={query} onChange={handleChange} />
    </Modal>
  );
}
