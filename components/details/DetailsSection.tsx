import { useMediaContext } from "@/context/MediaContext";
import Poster from "../Poster";
import ReviewForm from "./ReviewForm";

type DetailsSectionProps = {
  poster: string;
};

export default function DetailsSection({ poster }: DetailsSectionProps) {
  const mediaContext = useMediaContext();
  const { id, title, directors, releaseDate } = mediaContext.content;

  return (
    <div className="relative -top-14 mx-12 -mb-4 flex">
      <aside className="mr-12">
        <Poster
          title={title}
          fetchSize="w500"
          src={poster}
          height={288}
          width={192}
          classes="h-72 w-48"
        />
      </aside>
      <div className="flex grow flex-col justify-between text-center">
        <div className="font-sora">
          <p className="pointer-events-none text-2xl text-[#D3D4D9] drop-shadow">
            {title}
          </p>
          <p className="mt-0.5">
            <span className="ml-2 text-lg font-light text-[#D3D4D9]/70">
              {releaseDate ? releaseDate : ""}
            </span>{" "}
            <span className="ml-0.5 text-nowrap text-lg font-light text-[#D3D4D9]/70">
              {directors}
            </span>
          </p>
        </div>
        <div className="h-full">
          <ReviewForm id={id} title={title} posterPath={poster} />
        </div>
      </div>
    </div>
  );
}
