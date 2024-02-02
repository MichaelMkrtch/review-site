import { type ComponentPropsWithRef, forwardRef, useRef } from "react";

import Image from "next/image";

import searchIcon from "@/public/search-icon.svg";

type SearchBarProps = ComponentPropsWithRef<"input"> & {
  query: string;
  onChange: () => void;
};

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ query, onChange }, ref) {
    return (
      <div className="flex justify-center align-middle">
        <div className="mr-2 flex px-2">
          <Image
            src={searchIcon}
            alt="Magnifying glass icon"
            className="pointer-events-none select-none"
          />
        </div>
        <input
          ref={ref}
          id="title"
          type="text"
          name="title"
          placeholder="Search"
          value={query}
          required={true}
          onChange={(event) => onChange(event)}
          className="w-full border-gray-200 py-2 font-medium caret-cyan-500 outline-none placeholder:text-neutral-300"
        />
      </div>
    );
  },
);

export default SearchBar;
