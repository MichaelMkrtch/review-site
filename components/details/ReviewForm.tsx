import Rating from "@mui/material/Rating";
import { StarIcon } from "../Icons";

export default function ReviewForm() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="m-auto">
        {/* prevents Mui Rating component from auto-selecting on modal open */}
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
        />
      </div>
      <form>
        <textarea
          rows={4}
          placeholder="Write your review here"
          className="block w-full resize-none rounded bg-[#232323] p-2 placeholder:text-[#434343] focus:outline-none"
        ></textarea>
      </form>
    </div>
  );
}
