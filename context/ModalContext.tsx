"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

type ModalContextValue = {
  type: string;
  movieID: number;
  selectMovie: (id: number) => void;
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
  const [movieID, setMovieID] = useState<number>(0);

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

  function selectMovie(id: number) {
    setMovieID(id);
  }

  const modalContext: ModalContextValue = {
    type: modalType,
    movieID,
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
