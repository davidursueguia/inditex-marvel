import SearchBar from "../components/SearchBar.tsx";

const Favorites = () => {
  return (
    <div className={'pl-12 pr-12 pt-12'}>
      <p className={'float-left text-2xl font-bold leading-7 letter-spacing'}>FAVORITES</p>
      <SearchBar onSearch={() => {
        console.log("Searching...");
      }} resultsCount={0} isLoading={false} />
    </div>
  );
}
export default Favorites;
