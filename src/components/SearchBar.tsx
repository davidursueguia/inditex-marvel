import search from "../assets/search.svg";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
      onSearch(value);
  }

  return (
    <div className="w-full h-[77px] gap-[12px] pt-[12px]">
      <div className="relative flex items-center">
        <img
          src={search}
          alt="search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
        />
        <input
          type="text"
          value={query}
          placeholder="SEARCH A CHARACTER..."
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 text-gray-600 border-b-2 border-black outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
