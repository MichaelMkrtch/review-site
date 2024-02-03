"use client";

import { type ReactNode, createContext, useState, useContext } from "react";

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

type ModalType = "search" | "details" | "";

export default function ModalContextProvider({
  children,
}: ModalContextProviderProps) {
  const [modalType, setModalType] = useState<ModalType>("");

  function showSearch() {
    setModalType("search");
  }

  function hideSearch() {
    setModalType("");
  }

  function showDetails() {
    setModalType("details");
  }

  function hideDetails() {
    setModalType("");
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
