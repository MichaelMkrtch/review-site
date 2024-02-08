import { useMediaContext } from "@/context/MediaContext";
import Poster from "./Poster";
import ReviewForm from "./ReviewForm";

export default function DetailsSection() {
  const mediaContext = useMediaContext();
  const { id, title, directors, releaseDate, poster } = mediaContext.content;

  return (
    <div className="relative -top-14 mx-12 -mb-4 flex">
      <aside className="mr-12">
        <Poster />
      </aside>
      <div className="flex grow flex-col justify-between text-center">
        <div className="font-sora">
          <p className="pointer-events-none text-2xl text-[#D3D4D9] drop-shadow">
            {title}
          </p>
          <p className="mt-0.5">
            <span className="ml-2 text-lg font-light text-[#D3D4D9]/70">
              {releaseDate && releaseDate.slice(0, 4)}
            </span>{" "}
            <span className="ml-0.5 text-nowrap text-lg font-light text-[#D3D4D9]/70">
              {directors}
            </span>
          </p>
        </div>
        <div className="h-full">
          <ReviewForm id={id} posterPath={poster} />
        </div>
      </div>
    </div>
  );
}
