import { useEffect, useRef, useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar.jsx";
import SearchResultList from "./SearchResultList.jsx";

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

async function fetchData(query, callback) {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const results = res.data.filter((user) => {
    return (
      query && user && user.name && user.name.toLowerCase().includes(query)
    );
  });
  callback(results);
}

const debouncedFetchData = debounce(fetchData);

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const lastRequestID = useRef(null);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    // Updates lastRequestID to current requestID (timestamp)
    const requestID = performance.now();
    lastRequestID.current = requestID;

    debouncedFetchData(searchTerm, (results) => {
      // Only sets data if current request is the last
      if (requestID === lastRequestID.current) {
        setSearchResults(results);
      }
    });
  }, [searchTerm]);

  const handleChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onChange={(value) => handleChange(value)}
      />
      <SearchResultList results={searchResults} />
    </>
  );
}
