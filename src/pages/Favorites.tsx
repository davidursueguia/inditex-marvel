import SearchBar from "../components/SearchBar.tsx";

const Favorites = () => {
  return (
    <div>
      <h1>FAVORITES</h1>
      <SearchBar onSearch={() => {
        console.log("Searching...");
      }} />
    </div>
  );
}
export default Favorites;
