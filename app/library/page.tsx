"use client";

import { useEffect, useState } from "react";

import { IMG_BASE_URL } from "@/secrets";
import Image from "next/image";

export default function Library() {
  const [reviews, setReviews] = useState<any[]>();

  useEffect(() => {
    const allKeysJSON = Object.keys(localStorage);
    const reviewsJSON = allKeysJSON.map((key) => localStorage.getItem(key));
    const parsedReviews = reviewsJSON.map((review) => {
      if (review) return JSON.parse(review);
    });
    setReviews(parsedReviews);
  }, [reviews]);

  return (
    <div className="flex flex-wrap">
      {reviews &&
        reviews.map((review) => {
          return (
            <Image
              key={review.id}
              src={`${IMG_BASE_URL}w342${review.posterPath}`}
              alt="Movie poster"
              width={160}
              height={240}
              className="mx-4 h-60 w-40 rounded"
              priority
            />
          );
        })}
    </div>
  );
}
