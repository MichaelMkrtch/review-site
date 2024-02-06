import { useMediaContext } from "@/context/MediaContext";
import Poster from "./Poster";
import ReviewForm from "./ReviewForm";

export default function DetailsSection() {
  const mediaContext = useMediaContext();
  const { title } = mediaContext.content;

  return (
    <div className="relative -top-14 mx-12 -mb-2 flex">
      <aside className="mr-12">
        <Poster />
      </aside>
      <div className="flex grow flex-col justify-between text-center">
        <div className="font-sora">
          <p className="pointer-events-none text-2xl text-[#D3D4D9] drop-shadow">
            {title}
          </p>
          <p>
            <span className="ml-2 text-lg font-light text-[#D3D4D9]/70">
              2023
            </span>{" "}
            <span className="ml-0.5 text-nowrap text-lg font-light text-[#D3D4D9]/70">
              Justine Triet
            </span>
          </p>
        </div>
        <div className="h-full">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
}
