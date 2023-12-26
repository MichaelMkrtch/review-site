import { useState } from "react";
import axios from "axios";

import searchIcon from "../assets/search-icon.svg";

export default function Search({ setResults }) {
  const [input, setInput] = useState("");

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
    setInput(value);
    fetchData(input);
  }

  return (
    <>
      <div className="flex justify-center align-middle">
        <div className="flex px-2 mr-2">
          <img src={searchIcon} />
        </div>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Search"
          value={input}
          required="required"
          onChange={(event) => handleChange(event.target.value)}
          className="w-full border-gray-200 py-2 outline-none"
        />
      </div>
      <form method="dialog"></form>
    </>
  );
}
