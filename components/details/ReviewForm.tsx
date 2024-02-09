import {
  type FormEvent,
  type SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import Rating from "@mui/material/Rating";
import { StarIcon } from "../Icons";
import { useModalContext } from "@/context/ModalContext";

type ReviewFormProps = {
  id: number;
  title: string;
  posterPath: string;
};

type ReviewObject = {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
  reviewText: string;
};

export default function ReviewForm({ id, title, posterPath }: ReviewFormProps) {
  const [review, setReview] = useState<ReviewObject>();
  const [rating, setRating] = useState<number>();

  const modalContext = useModalContext();
  const textarea = useRef<HTMLTextAreaElement>(null);

  function handleStoreReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setReview((prevState) => {
      if (textarea.current && rating) {
        return {
          ...prevState,
          id,
          title: title,
          posterPath: posterPath,
          rating: rating,
          reviewText: textarea.current.value,
        };
      }
    });
    modalContext.hideDetails();
  }

  function handleRating(event: SyntheticEvent) {
    let { value } = event.target as unknown as { value: number };
    setRating(value);
  }

  useEffect(() => {
    if (review?.rating && review.reviewText) {
      const reviewJSON = JSON.stringify(review);
      localStorage.setItem(review.id.toString(), reviewJSON);
      window.dispatchEvent(new Event("storage"));
    }
  }, [review]);

  return (
    <div className="flex h-full flex-col justify-between">
      <form
        onSubmit={handleStoreReview}
        className="flex h-full flex-col"
        id="review-form"
      >
        <div className="m-auto">
          {/* prevents MUI Rating component from auto-selecting on modal open */}
          <input type="radio" className="opacity-0" />
          <Rating
            name="film-rating"
            icon={<StarIcon color="#FFD43B" />}
            emptyIcon={<StarIcon color="#434343" />}
            defaultValue={0}
            precision={0.5}
            sx={{
              "& .MuiRating-decimal": {
                margin: 0.35,
              },
            }}
            onChange={handleRating}
          />
        </div>
        <textarea
          ref={textarea}
          rows={4}
          placeholder="Write your review here"
          className="block w-full resize-none rounded bg-[#232323] p-2 placeholder:text-[#434343] focus:outline-none"
        ></textarea>
      </form>
    </div>
  );
}
