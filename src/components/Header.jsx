export default function Header() {
  return (
    <>
      <header>
        <div className="flex items-center justify-between px-12 py-8">
          <h1 className="text-4xl">Reviews</h1>
          <button className="rounded bg-cyan-350 px-4 py-2 text-base transition-colors duration-200 ease-in-out hover:bg-cyan-250">
            Add Review
          </button>
        </div>
      </header>
    </>
  );
}
