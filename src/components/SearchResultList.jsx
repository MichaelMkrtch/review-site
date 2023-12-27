import SearchResult from "./SearchResult.jsx";

export default function SearchResultList({ results }) {
  const filteredResults = results.slice(0, 5);

  return (
    <div className="mt-3 border-t pt-2.5">
      {filteredResults.map((movie, index) => {
        return <SearchResult key={index}>{movie.title}</SearchResult>;
      })}
    </div>
  );
}
