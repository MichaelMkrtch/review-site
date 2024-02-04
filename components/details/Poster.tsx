"use client";

import Image from "next/image";

import { useModalContext } from "@/context/ModalContext";
import { IMG_BASE_URL } from "@/secrets";

export default function Poster() {
  const { posterPath } = useModalContext();

  return (
    <Image
      src={`${IMG_BASE_URL}w780${posterPath}`}
      alt="A movie poster"
      width={780}
      height={1170}
      className="h-72 w-48 rounded object-cover"
    />
  );
}
