"use client";

import Modal from "@/components/Modal";
import SearchBar from "@/components/search/SearchBar";
import { useModalContext } from "@/context/ModalContext";

export default function SearchModal() {
  const modalContext = useModalContext();

  function handleCloseSearch() {
    modalContext.hideSearch();
  }

  return (
    <Modal open={modalContext.type === "search"} onClose={handleCloseSearch}>
      <SearchBar />
    </Modal>
  );
}
