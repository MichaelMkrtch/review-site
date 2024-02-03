import { type ReactNode } from "react";

import Image from "next/image";

import { IMG_BASE_URL } from "@/secrets.ts";
import { useModalContext } from "@/context/ModalContext";

type SearchResultProps = {
  movieID: number;
  posterPath: string;
  selectedItemIndex: number;
  renderIndex: number;
  children: ReactNode;
};

export default function SearchResult({
  movieID,
  posterPath,
  selectedItemIndex,
  renderIndex,
  children,
}: SearchResultProps) {
  const modalContext = useModalContext();

  let classes =
    "flex justify-start rounded-lg py-2 mt-1 items-center first:!bg-cyan-350/80 hover:bg-neutral-300/40";

  if (selectedItemIndex > 0) {
    classes = classes.replace("first:!bg-cyan-350/80", "first:bg-transparent");
  }

  if (selectedItemIndex === renderIndex) {
    classes += " !bg-cyan-350/80";
  }

  let image;
  let gradient;

  if (posterPath) {
    image = (
      <Image
        src={`${IMG_BASE_URL}w92${posterPath}`}
        className="h-12 w-8 rounded"
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
    modalContext.showDetails();
    modalContext.selectMovie(movieID);
  }

  return (
    <div className={classes}>
      <button
        type="button"
        className="flex w-full items-center"
        onClick={handleShowDetails}
      >
        <div className="pointer-events-none mr-1.5 flex px-2">
          {posterPath ? image : gradient}
        </div>
        <p>{children}</p>
      </button>
    </div>
  );
}
