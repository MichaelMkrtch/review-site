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
      setReviews(parsedReviews);
    }

    window.addEventListener("storage", () => {
      getReviews();
    });

    getReviews();
  }, []);

  return (
    <section className="inline-grid auto-cols-min grid-flow-row auto-rows-min grid-cols-7 gap-8">
      {reviews &&
        reviews.map((review) => {
          return (
            <div key={review.id} className="relative">
              <Poster
                key={review.id}
                title={review.title}
                fetchSize="w342"
                src={review.posterPath}
                width={160}
                height={240}
                classes="h-60 w-40 peer hover:scale-110 transition-all duration-100 animate-enter"
              />
            </div>
          );
        })}
    </section>
  );
}
