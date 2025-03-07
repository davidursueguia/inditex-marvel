import search from "../assets/search.svg";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  resultsCount: number;
  isLoading: boolean;
}

const SearchBar = ({ onSearch, resultsCount, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
      onSearch(value);
  }

  return (
    <div className="flex flex-col w-full h-[77px] gap-[12px] pt-[12px] mb-5">
      <div className="relative flex items-center">
        <img
          src={search}
          alt="search"
          className="absolute h-5 w-5"
        />
        <input
          type="text"
          value={query}
          placeholder="SEARCH A CHARACTER..."
          onChange={handleChange}
          className="w-full pl-7 py-2 text-gray-600 border-b-2 border-black outline-none"
        />
      </div>
      <p className={'self-start'}>{isLoading ? 'LOADING RESULTS...' : resultsCount + ' RESULTS'}</p>
    </div>
  );
};

export default SearchBar;
