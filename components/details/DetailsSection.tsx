import { useModalContext } from "@/context/ModalContext";
import Poster from "./Poster";
import ReviewForm from "./ReviewForm";

export default function DetailsSection() {
  const { movieName } = useModalContext();

  return (
    <div className="relative -top-24 mx-12 flex">
      <aside className="mr-12">
        <Poster />
      </aside>
      <div className="flex grow flex-col justify-between text-center">
        <div className="font-sora">
          <p className="pointer-events-none drop-shadow">
            <span className="text-2xl text-zinc-200">{movieName}</span>{" "}
            <span className="ml-2 text-lg font-light text-slate-400">2021</span>{" "}
            <span className="ml-0.5 text-nowrap text-lg font-light text-slate-400">
              Denis Villeneuve
            </span>
          </p>
        </div>
        <div className="">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
}
