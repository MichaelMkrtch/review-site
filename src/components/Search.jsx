import { useState } from "react";
import axios from "axios";

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
      <div className="relative">
        <input
          type="text"
          name="title"
          id="title"
          value={input}
          onChange={event => handleChange(event.target.value)}
          required="required"
          className="peer w-full rounded-md border-2 border-gray-200 p-2 outline-0 focus:border-cyan-350"
        />
        <label
          htmlFor="title"
          className="duration200 pointer-events-none absolute left-0 top-0.5 p-2 text-gray-300 transition-all ease-in-out peer-focus:-translate-y-3.5 peer-focus:translate-x-4 peer-focus:border-x-2 peer-focus:border-cyan-350 peer-focus:bg-white peer-focus:px-2 peer-focus:py-0 peer-focus:text-cyan-350"
        >
          Search
        </label>
      </div>
      <form method="dialog"></form>
    </>
  );
}
