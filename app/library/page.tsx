"use client";

import { IMG_BASE_URL } from "@/secrets";
import Image from "next/image";

export default function Library() {
  const allKeysJSON = Object.keys(localStorage);
  const reviewsJSON = allKeysJSON.map((key) => localStorage.getItem(key));
  const reviews = reviewsJSON.map((review) => {
    if (review) return JSON.parse(review);
  });

  return (
    <div className="flex">
      {reviews.map((review) => {
        return (
          <Image
            key={review.id}
            src={`${IMG_BASE_URL}w500${review.posterPath}`}
            alt="Movie poster"
            width={160}
            height={240}
            className="h-60 w-40 mx-4 rounded"
            priority
          />
        );
      })}
    </div>
  );
}
