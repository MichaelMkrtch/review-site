import { useEffect, useState } from "react";
import Image from "next/image";

import { IMG_BASE_URL } from "@/secrets";
import { useModalContext } from "@/context/ModalContext";
import { useMediaContext } from "@/context/MediaContext";
import useImageOnLoad from "@/hooks/useImageOnLoad";
import Modal from "../Modal";
import DetailsSection from "./DetailsSection";

export default function DetailsModal() {
  const [backdrop, setBackdrop] = useState("");
  const [poster, setPoster] = useState("");

  const modalContext = useModalContext();
  const mediaContext = useMediaContext();

  const { handleImageOnLoad, setIsLoaded, transitionStyles } = useImageOnLoad();

  useEffect(() => {
    const content = mediaContext.content;
    content.backdropPath && setBackdrop(content.backdropPath);
    content.posterPath && setPoster(content.posterPath);
  }, [mediaContext.content]);

  function handleCloseDetails() {
    modalContext.hideDetails();
    setBackdrop("");
    setPoster("");
    setIsLoaded(false);
  }

  return (
    <Modal
      hasPadding={false}
      open={modalContext.type === "showDetails"}
      onClose={handleCloseDetails}
    >
      {backdrop && (
        <div className="relative h-[400px] ">
          <div className="absolute h-full w-full bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          <Image
            src={`${IMG_BASE_URL}w300${backdrop}`}
            alt={`Still image from the film ${mediaContext.content.title}`}
            width={5}
            height={5}
            className=" top-0 h-auto w-full rounded-lg object-cover blur-[2px] [image-rendering:_pixelated]"
            style={transitionStyles.lowRes}
            priority
          />
          <Image
            onLoad={handleImageOnLoad}
            src={`${IMG_BASE_URL}original${backdrop}`}
            alt={`Still image from the film ${mediaContext.content.title}`}
            width={900}
            height={500}
            className="absolute bottom-0 top-0 -z-10 h-full max-h-full w-full max-w-full rounded-lg object-cover"
            style={transitionStyles.highRes}
            priority
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
