"use client";

import { useEffect, useState } from "react";

import Poster from "./Poster";

type Review = {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
  reviewText: string;
};

export default function PosterGrid() {
  const [reviews, setReviews] = useState<Review[]>();

  // sets initial state and listens for changes in local storage
  useEffect(() => {
    function getReviews() {
      const allKeysJSON = Object.keys(localStorage);
      const reviewsJSON = allKeysJSON.map((key) => localStorage.getItem(key));
      const parsedReviews = reviewsJSON.map((review) => {
        if (review) return JSON.parse(review);
      });
      const filteredReviews = parsedReviews.filter(
        (review: { userAgent: any }) => !review.userAgent,
      );
      setReviews(filteredReviews);
    }

    window.addEventListener("storage", () => {
      getReviews();
    });
    getReviews();
  }, []);

  return (
    <section className="inline-grid auto-cols-min grid-flow-row auto-rows-min grid-cols-2 gap-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
      {reviews &&
        reviews.map((review) => {
          return (
            <Poster
              key={review.id}
              title={review.title}
              fetchSize="w342"
              src={review.posterPath}
              width={160}
              height={240}
              classes="h-60 w-40"
            />
          );
        })}
    </section>
  );
}
