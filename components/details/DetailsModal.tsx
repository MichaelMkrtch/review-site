"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Image from "next/image";

import { IMG_BASE_URL } from "@/secrets";
import { useModalContext } from "@/context/ModalContext";
import { fetchBackdrops } from "@/utils/fetchBackdrops";
import Modal from "../Modal";
import DetailsSection from "./DetailsSection";

export default function DetailsModal() {
  const [backdrop, setBackdrop] = useState();

  const modalContext = useModalContext();
  const movieID = modalContext.movieID;

  const { data } = useQuery({
    queryKey: ["backdrop", movieID],
    queryFn: ({ signal }) => fetchBackdrops({ signal, movieID }),
    staleTime: 10000,
    enabled: movieID !== 0,
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
          <div className="absolute h-full w-full bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          {backdrop && (
            <Image
              src={`${IMG_BASE_URL}original${backdrop}`}
              alt="Backdrop image"
              width={3840}
              height={2160}
              priority
              className="rounded-lg object-cover"
            />
          )}
        </div>
      )}
      <DetailsSection />
    </Modal>
  );
}
