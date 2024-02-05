import { type ComponentPropsWithRef, forwardRef } from "react";

import { MagnifyingGlassIcon } from "../Icons";

type SearchBarProps = ComponentPropsWithRef<"input"> & {
  query: string;
  onChange: () => void;
};

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ query, onChange }, ref) {
    return (
      <div className="flex justify-center align-middle">
        <div className="mx-4 flex pr-2">
          <MagnifyingGlassIcon className="my-auto" />
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
          className="w-full bg-[#232323] py-2 font-medium outline-none placeholder:font-medium placeholder:tracking-wide placeholder:text-[#434343]"
        />
      </div>
    );
  },
);

export default SearchBar;
