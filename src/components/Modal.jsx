import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      id="modal"
      className="open:backdrop:animate-fadein open:animate-enter w-3/5 rounded-lg px-3 py-3.5 outline-none backdrop:bg-neutral-900 backdrop:opacity-30"
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.querySelector("#modal"),
  );
}
