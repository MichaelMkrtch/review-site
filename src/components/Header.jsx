export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center px-12 py-8">
        <h1 className="text-4xl">Reviews</h1>
        <button className="text-base bg-cyan-350 px-4 py-2 rounded">Add Review</button>
      </div>
    </header>
  );
}
