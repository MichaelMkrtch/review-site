import { useEffect, useRef, useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar.jsx";
import SearchResultList from "./SearchResultList.jsx";
import { API_ACCESS_TOKEN } from "../../secrets.js";

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

async function fetchData(query, controller, callback) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: query,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    signal: controller.signal,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_ACCESS_TOKEN}`,
    },
  };

  try {
    // gets response and filters it to only movie titles
    const response = await axios.request(options);
    const results = response.data.results.filter((movie) => {
      return (
        query &&
        movie &&
        movie.title &&
        movie.title.toLowerCase().includes(query)
      );
    });
    callback(results);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request cancelled");
    } else {
      throw error;
    }
  }
}

const debouncedFetchData = debounce(fetchData);

export default function Search({ searchTerm, setSearchTerm }) {
  const [searchResults, setSearchResults] = useState([]);

  const lastRequestID = useRef(null);

  useEffect(() => {
    const controller = new AbortController();

    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    // Updates lastRequestID to current requestID (timestamp)
    const requestID = performance.now();
    lastRequestID.current = requestID;

    debouncedFetchData(searchTerm, controller, (results) => {
      // Only sets data if current request is the last
      if (requestID === lastRequestID.current) {
        setSearchResults(results);
      }
    });

    return () => {
      controller.abort();
    };
  }, [searchTerm]);

  function handleChange(value) {
    setSearchTerm(value);
  }

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        results={searchResults}
        onChange={handleChange}
      />
      <SearchResultList results={searchResults} />
    </>
  );
}
