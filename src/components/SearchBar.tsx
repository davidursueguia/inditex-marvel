import search from "../assets/search.svg";

const SearchBar = () => {
  return (
    <div className="w-full h-[77px] gap-[12px] pt-[12px] mb-5">
      <div className="relative flex items-center">
        <img
          src={search}
          alt="search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
        />
        <input
          type="text"
          placeholder="SEARCH A CHARACTER..."
          className="w-full pl-10 pr-4 py-2 text-gray-600 border-b-2 border-black outline-none"
        />
      </div>
      <p className="absolute text-xs mt-2 float-left">50 RESULTS</p>
    </div>
  );
};

export default SearchBar;
