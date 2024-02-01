"use client";

import Modal from "@/components/Modal";
import { useModalContext } from "@/context/ModalContext";

export default function Search() {
  const modalContext = useModalContext();

  function handleCloseSearch() {
    modalContext.hideSearch();
  }

  return (
    <Modal
      open={modalContext.type === "search"}
      onClose={handleCloseSearch}
    ></Modal>
  );
}
