import { type ReactNode } from "react";

import Image from "next/image";

import { IMG_BASE_URL } from "@/secrets.ts";
import { useModalContext } from "@/context/ModalContext";
import { useMediaContext } from "@/context/MediaContext";

type SearchResultProps = {
  movieName: string;
  id: number;
  posterPath: string;
  selectedItemIndex: number;
  renderIndex: number;
  children: ReactNode;
};

export default function SearchResult({
  movieName,
  id,
  posterPath,
  selectedItemIndex,
  renderIndex,
  children,
}: SearchResultProps) {
  const modalContext = useModalContext();
  const mediaContext = useMediaContext();

  let classes =
    "flex justify-start rounded-lg py-2 mt-1 items-center first:!bg-cyan-350/80 hover:bg-[#313131]/90";

  if (selectedItemIndex > 0) {
    classes = classes.replace("first:!bg-cyan-350/80", "first:bg-transparent");
  }

  if (selectedItemIndex === renderIndex) {
    classes += " !bg-cyan-350/80 text-gray-850";
  }

  let poster;
  let gradient;

  if (posterPath) {
    poster = (
      <Image
        src={`${IMG_BASE_URL}w92${posterPath}`}
        className="h-12 w-8 rounded object-contain"
        width={92}
        height={138}
        alt="A movie poster"
      />
    );
  } else {
    gradient = (
      <div className="h-12 w-8 rounded bg-gradient-to-tr from-indigo-600 to-rose-600"></div>
    );
  }

  function handleShowDetails() {
    mediaContext.writeData({
      type: "film",
      title: movieName,
      id: id,
      poster: posterPath,
    });
    modalContext.showDetails();
  }

  return (
    <div className={classes}>
      <button
        type="button"
        className="flex w-full cursor-default items-center"
        onClick={handleShowDetails}
      >
        <div className="pointer-events-none mr-1.5 flex px-2">
          {posterPath ? poster : gradient}
        </div>
        <p>{children}</p>
      </button>
    </div>
  );
}
