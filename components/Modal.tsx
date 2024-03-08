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

  let classes =
    "w-3/5 max-w-[50%] rounded-xl outline-none drop-shadow-lg text-[#D3D4D9] backdrop:bg-neutral-950 backdrop:opacity-70 open:animate-enter open:backdrop:animate-fadein";

  if (hasPadding) {
    classes += " h-[421px] px-3 py-3.5 bg-[#232323]";
  } else {
    classes += " overflow-hidden bg-[#181818]";
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
