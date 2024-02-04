"use client";

import { createPortal } from "react-dom";

import { type ComponentPropsWithRef, useRef, useEffect, useState } from "react";

type ModalProps = ComponentPropsWithRef<"dialog"> & {
  hasPadding: boolean;
};

export default function Modal({
  hasPadding,
  open,
  onClose,
  children,
}: ModalProps) {
  const [documentMounted, setDocumentMounted] = useState(false);

  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal?.showModal();
    }

    return () => modal?.close();
  }, [open]);

  useEffect(() => {
    setDocumentMounted(true);
  }, []);

  let classes: string;
  if (hasPadding) {
    classes =
      "w-3/5 max-w-[50%] rounded-xl bg-[#232323] text-zinc-200 px-3 py-3.5 outline-none drop-shadow-lg backdrop:bg-[#000] backdrop:opacity-70 open:animate-enter open:backdrop:animate-fadein";
  } else {
    classes =
      "w-3/5  rounded-xl bg-[#181818] text-zinc-200 outline-none drop-shadow-lg backdrop:bg-[#000] backdrop:opacity-70 open:animate-enter open:backdrop:animate-fadein";
  }

  return (
    documentMounted &&
    createPortal(
      <dialog ref={dialog} onClose={onClose} className={classes}>
        {children}
      </dialog>,
      document.querySelector("#modal") as HTMLElement,
    )
  );
}
