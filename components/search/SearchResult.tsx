import { type ReactNode, useCallback, useEffect } from "react";

import Image from "next/image";

import { type Movie } from "@/utils/fetchMovieDetails";
import { IMG_BASE_URL } from "@/secrets.ts";
import { useModalContext } from "@/context/ModalContext";
import { useMediaContext } from "@/context/MediaContext";

interface SearchResultProps extends Movie {
  selectedItemIndex: number;
  renderIndex: number;
  children: ReactNode;
}

export default function SearchResult({
  id,
  title,
  directors,
  releaseDate,
  posterPath,
  backdrops,
  selectedItemIndex,
  renderIndex,
  children,
}: SearchResultProps) {
  const modalContext = useModalContext();
  const mediaContext = useMediaContext();

  let directorList = "";

  if (directors) {
    if (directors.length > 2) {
      directorList =
        directors
          .map((director) => director.name)
          .slice(0, 2)
          .join(", ") + ", et al.";
    } else if (directors.length === 2) {
      directorList = directors.map((director) => director.name).join(", ");
    } else if (directors.length === 1) {
      directorList = directors[0].name;
    }
  }

  let classes =
    "flex justify-start rounded-lg py-2 mt-1 items-center first:!bg-cyan-350/80 hover:bg-[#313131]/90";

  if (selectedItemIndex > 0) {
    classes = classes.replace("first:!bg-cyan-350/80", "first:bg-transparent");
  }

  if (selectedItemIndex === renderIndex) {
    classes +=
      " !bg-cyan-350/80 text-[#232323] [&_>button>div>span]:text-[#232323]/60";
  }

  let poster;
  let gradient;

  if (posterPath) {
    poster = (
      <Image
        src={`${IMG_BASE_URL}w92${posterPath}`}
        alt={`A poster from the film {title}`}
        width={92}
        height={138}
        className="h-12 w-8 rounded object-contain"
        priority
      />
    );
  } else {
    gradient = (
      <div className="h-12 w-8 rounded bg-gradient-to-tr from-indigo-600 to-rose-600"></div>
    );
  }

  const handleShowDetails = useCallback(
    function handleShowDetails() {
      mediaContext.writeData({
        type: "film",
        id,
        title,
        directors: directorList,
        releaseDate,
        posterPath,
        backdrops,
      });
      modalContext.showDetails();
    },
    [
      mediaContext,
      modalContext,
      id,
      title,
      directorList,
      releaseDate,
      posterPath,
      backdrops,
    ],
  );

  // Enables keyboard selection of search results
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter" && selectedItemIndex === renderIndex) {
        handleShowDetails();
      }
    },
    [selectedItemIndex, handleShowDetails, renderIndex],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

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
        <div className="flex items-baseline text-left">
          <p>
            {children} ({releaseDate})
          </p>
          <span className="pl-2.5 align-bottom text-sm text-[#D3D4D9]/60">
            {directorList}
          </span>
        </div>
      </button>
    </div>
  );
}
