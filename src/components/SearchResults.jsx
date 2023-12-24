export default function SearchResults({ results }) {
  return (
    <>
      {results.map((result, index) => {
        return <div key={index}>{result.name}</div>;
      })}
    </>
  );
}
