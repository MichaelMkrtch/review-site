"use client"

import Image from 'next/image';

import { IMG_BASE_URL } from "@/secrets";
import { useModalContext } from "@/context/ModalContext";

import Modal from "../Modal";


export default function DetailsModal() {
  const modalContext = useModalContext();

  function handleCloseDetails() {
    modalContext.hideDetails();
  }

  return (
    <Modal open={modalContext.type === "showDetails"} onClose={handleCloseDetails}>
      <Image src={`${IMG_BASE_URL}w1280/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg`} alt="Backdrop image" width={3840} height={2160} />
    </Modal>
  )
}