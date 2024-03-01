import { useEffect, useState } from "react";
import Image from "next/image";

import { IMG_BASE_URL } from "@/secrets";
import { useModalContext } from "@/context/ModalContext";
import Modal from "../Modal";
import DetailsSection from "./DetailsSection";
import { useMediaContext } from "@/context/MediaContext";

export default function DetailsModal() {
  const [backdrop, setBackdrop] = useState("");
  const [poster, setPoster] = useState("");

  const modalContext = useModalContext();
  const mediaContext = useMediaContext();

  useEffect(() => {
    setBackdrop(mediaContext.content.backdrop_path);
    setPoster(mediaContext.content.poster_path);
  }, [mediaContext.content]);

  function handleCloseDetails() {
    modalContext.hideDetails();
    setBackdrop("");
    setPoster("");
  }

  return (
    <Modal
      hasPadding={false}
      open={modalContext.type === "showDetails"}
      onClose={handleCloseDetails}
    >
      {backdrop && (
        <div className="relative">
          <div className="absolute h-full w-full bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          <Image
            src={`${IMG_BASE_URL}original${backdrop}`}
            alt="Backdrop image"
            width={900}
            height={500}
            className="h-[500px] w-[900px] rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      )}
      <DetailsSection poster={poster} />
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
