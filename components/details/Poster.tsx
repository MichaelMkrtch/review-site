"use client";

import Image from "next/image";

import { useMediaContext } from "@/context/MediaContext";
import { IMG_BASE_URL } from "@/secrets";

export default function Poster() {
  const mediaContext = useMediaContext();
  const { poster: posterPath } = mediaContext.content;

  return (
    <Image
      src={`${IMG_BASE_URL}w780${posterPath}`}
      alt="A movie poster"
      width={192}
      height={288}
      className="h-72 w-48 rounded object-cover drop-shadow"
    />
  );
}
