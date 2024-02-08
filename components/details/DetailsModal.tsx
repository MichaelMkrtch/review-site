"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Image from "next/image";

import { IMG_BASE_URL } from "@/secrets";
import { useModalContext } from "@/context/ModalContext";
import { fetchBackdrops } from "@/utils/fetchBackdrops";
import Modal from "../Modal";
import DetailsSection from "./DetailsSection";
import { useMediaContext } from "@/context/MediaContext";

export default function DetailsModal() {
  const [backdrop, setBackdrop] = useState();

  const modalContext = useModalContext();
  const mediaContext = useMediaContext();

  const { id } = mediaContext.content;

  const { data } = useQuery({
    queryKey: ["backdrop", id],
    queryFn: ({ signal }) => fetchBackdrops({ signal, id }),
    staleTime: 5 * 60 * 1000,
    enabled: id > 0,
  });

  function handleCloseDetails() {
    modalContext.hideDetails();
  }

  useEffect(() => {
    if (data) {
      setBackdrop(data);
    }
  }, [data]);

  return (
    <Modal
      hasPadding={false}
      open={modalContext.type === "showDetails"}
      onClose={handleCloseDetails}
    >
      {data && (
        <div className="relative">
          <div className="absolute h-full w-full bg-gradient-to-t from-[#181818] via-transparent to-transparent px-1 pb-1" />
          {backdrop && (
            <Image
              src={`${IMG_BASE_URL}w1280${backdrop}`}
              alt="Backdrop image"
              width={1000}
              height={500}
              priority
              className="rounded-lg object-cover"
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
