import { useRef } from 'react'

import AddReviewModal from "./AddReviewModal";

export default function Header() {
  const modal = useRef();

  function handleOpenModal() {
    modal.current.open();
  }

  return (
    <>
      <AddReviewModal ref={modal} />
      <header>
        <div className="flex items-center justify-between px-12 py-8">
          <h1 className="text-4xl">Reviews</h1>
          <button
            className="rounded bg-cyan-350 px-4 py-2 text-base"
            onClick={handleOpenModal}
          >
            Add Review
          </button>
        </div>
      </header>
    </>
  );
}
