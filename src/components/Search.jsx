import { useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar.jsx";
import SearchResultList from "./SearchResultList.jsx";

export default function Search({ results, setResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchData(value) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const results = res.data.filter((user) => {
      return (
        value && user && user.name && user.name.toLowerCase().includes(value)
      );
    });
    setResults(results);
  }

  function handleChange(value) {
    setSearchTerm(value);
    fetchData(searchTerm);
  }

  return (
    <>
      <SearchBar searchTerm={searchTerm} onChange={handleChange} />
      <SearchResultList results={results} />
    </>
  );
}
