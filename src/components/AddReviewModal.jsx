import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

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
      <div className="relative mb-4">
        <input
          type="text"
          name="title"
          id="title"
          required="required"
          className="peer w-full rounded-md border-2 border-gray-200 p-2 outline-0 focus:border-cyan-350"
        />
        <label
          htmlFor="title"
          className="duration200 pointer-events-none absolute left-0 top-0.5 p-2 text-gray-300 transition-all ease-in-out peer-focus:-translate-y-3.5 peer-focus:translate-x-4 peer-focus:border-x-2 peer-focus:border-cyan-350 peer-focus:bg-white peer-focus:px-2 peer-focus:py-0 peer-focus:text-cyan-350"
        >
          Search
        </label>
      </div>
      <form method="dialog">
        <div className="float-right">
          <button className="duration200 hover:text-cyan-250 mr-4 transition-colors ease-in-out">
            Cancel
          </button>
          <button className="hover:bg-cyan-250 rounded-md bg-cyan-350 px-4 py-2 transition-colors duration-200 ease-in-out">
            Add
          </button>
        </div>
      </form>
    </dialog>,
    document.querySelector("#modal"),
  );
});

export default AddReviewModal;
