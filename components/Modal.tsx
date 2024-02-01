"use client";

import { createPortal } from "react-dom";

import { type ComponentPropsWithRef, useRef, useEffect, useState } from "react";

type ModalProps = ComponentPropsWithRef<"dialog">;

export default function Modal({ open, onClose, children }: ModalProps) {
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

  return (
    documentMounted &&
    createPortal(
      <dialog
        ref={dialog}
        onClose={onClose}
        className="open:backdrop:animate-fadein open:animate-enter w-3/5 rounded-lg px-3 py-3.5 outline-none backdrop:bg-neutral-900 backdrop:opacity-30"
      >
        {children}
      </dialog>,
      document.querySelector("#modal") as HTMLElement,
    )
  );
}
