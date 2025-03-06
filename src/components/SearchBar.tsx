import search from "../assets/search.svg";
const SearchBar = () => {

  return (
    <div className="w-full h-[77px] gap-[12px]pt-[12px] pb-[12px]">
      <div className="relative flex items-center">
        <img src={search} alt={'search'} className={"h-[12px] w-[12px]"}/>
        <input
          type="text"
          placeholder="SEARCH A CHARACTER..."
          className="w-full pl-10 pr-4 py-2 text-gray-600 border-b-2 border-black outline-none focus:border-gray-700 transition"
        />
      </div>
      <p className="text-xs font-normal flex h-[14px] w-auto mt-2">50 RESULTS</p>
    </div>
  );
};

export default SearchBar;
