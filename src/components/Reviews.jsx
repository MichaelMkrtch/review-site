export default function Reviews({ onAddReview }) {
  return (
    <>
      <div className="flex items-center justify-between px-12 py-8">
        <h1 className="text-4xl">Reviews</h1>
        <button
          className="rounded bg-cyan-350 px-4 py-2 text-base outline-none transition-colors duration-200 ease-in-out hover:bg-cyan-250"
          onClick={onAddReview}
        >
          Add Review
        </button>
      </div>
    </>
  );
}
