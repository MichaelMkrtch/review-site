import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Search from "./Search.jsx";

const AddReviewModal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      id="modal"
      className="w-3/5 max-w-md rounded-md px-4 pb-4 pt-8 outline-0"
    >
      <Search />
    </dialog>,
    document.querySelector("#modal"),
  );
});

export default AddReviewModal;
