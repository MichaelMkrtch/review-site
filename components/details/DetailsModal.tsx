"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { IMG_BASE_URL } from "@/secrets";
import { useModalContext } from "@/context/ModalContext";
import Modal from "../Modal";
import DetailsSection from "./DetailsSection";
import { useMediaContext } from "@/context/MediaContext";

export default function DetailsModal() {
  const [backdrop, setBackdrop] = useState<string>();

  const modalContext = useModalContext();
  const mediaContext = useMediaContext();

  const { backdrops } = mediaContext.content;

  function handleCloseDetails() {
    modalContext.hideDetails();
  }

  useEffect(() => {
    if (backdrops) {
      const randInt = Math.floor(Math.random() * backdrops.length);
      setBackdrop(backdrops[randInt].file_path);
    }
  }, [backdrops]);

  return (
    <Modal
      hasPadding={false}
      open={modalContext.type === "showDetails"}
      onClose={handleCloseDetails}
    >
      {backdrops && (
        <div className="relative">
          <div className="absolute h-full w-full bg-gradient-to-t from-[#181818] via-transparent to-transparent px-1 pb-1" />
          {backdrop && (
            <Image
              src={`${IMG_BASE_URL}w1280${backdrop}`}
              alt="Backdrop image"
              width={1000}
              height={500}
              className="rounded-lg object-cover"
              priority
            />
          )}
        </div>
      )}
      <DetailsSection />
      <div className="mx-12 -mt-7 mb-6 flex h-full justify-end">
        <button
          form="review-form"
          className="rounded bg-cyan-350 px-4 py-2 text-gray-850 outline-none transition-colors duration-200 ease-in-out hover:bg-cyan-250 active:bg-cyan-400"
        >
          Save
        </button>
      </div>
    </Modal>
  );
}
