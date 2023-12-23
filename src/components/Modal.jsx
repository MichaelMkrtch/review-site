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
      className="w-3/5 max-w-md rounded-md px-4 pb-4 pt-8 outline-0"
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.querySelector("#modal"),
  );
}
