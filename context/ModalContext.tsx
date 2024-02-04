"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

type ModalContextValue = {
  type: string;
  movieName: string;
  movieID: number;
  posterPath: string;
  selectMovie: (movieName: string, id: number, posterPath: string) => void;
  showSearch: () => void;
  hideSearch: () => void;
  showDetails: () => void;
  hideDetails: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModalContext() {
  const modalContext = useContext(ModalContext);

  if (modalContext === null) {
    throw new Error(
      "modalContext has to be used within <ModalContext.Provider />",
    );
  }

  return modalContext;
}

type ModalContextProviderProps = {
  children: ReactNode;
};

type ModalType =
  | "showSearch"
  | "hideSearch"
  | "showDetails"
  | "hideDetails"
  | "";

export default function ModalContextProvider({
  children,
}: ModalContextProviderProps) {
  const [modalType, setModalType] = useState<ModalType>("");
  const [movieName, setMovieName] = useState<string>("");
  const [movieID, setMovieID] = useState<number>(0);
  const [posterPath, setPosterPath] = useState<string>("");

  function showSearch() {
    setModalType("showSearch");
  }

  function hideSearch() {
    setModalType("hideSearch");
  }

  function showDetails() {
    setModalType("showDetails");
  }

  function hideDetails() {
    setModalType("hideDetails");
  }

  function selectMovie(movieName: string, id: number, posterPath: string) {
    setMovieName(movieName);
    setMovieID(id);
    setPosterPath(posterPath);
  }

  const modalContext: ModalContextValue = {
    type: modalType,
    movieName,
    movieID,
    posterPath,
    selectMovie,
    showSearch,
    hideSearch,
    showDetails,
    hideDetails,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
}
