import searchIcon from "../../assets/search-icon.svg";

export default function SearchBar({ searchTerm, onChange }) {
  return (
    <div className="flex justify-center align-middle">
      <div className="mr-2 flex px-2">
        <img src={searchIcon} className="pointer-events-none select-none" />
      </div>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Search"
        value={searchTerm}
        required="required"
        onChange={(event) => onChange(event.target.value)}
        className="w-full border-gray-200 py-2 font-medium caret-cyan-500 outline-none placeholder:text-neutral-300"
      />
    </div>
  );
}
