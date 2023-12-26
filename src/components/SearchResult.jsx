export default function SearchResult({ children }) {
  return (
    <div className="flex justify-start rounded-md py-2 align-middle hover:bg-cyan-200">
      <div className="mr-2 flex px-2">
        <img />
      </div>
      <p>{children}</p>
    </div>
  );
}
