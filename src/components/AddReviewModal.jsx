import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const AddReviewModal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      }
    }
  })

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <input />
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.querySelector('#modal')
  )
})

export default AddReviewModal