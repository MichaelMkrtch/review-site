"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

type ModalContextValue = {
  type: string;
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

  const modalContext: ModalContextValue = {
    type: modalType,
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
