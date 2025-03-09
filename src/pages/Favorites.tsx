import { useState } from "react";
import { useFavoritesStore } from "../store/useFavoritesStore.ts";
import SearchBar from "../components/SearchBar.tsx";
import CharacterGrid from "../components/CharacterGrid.tsx";

const Favorites = () => {
  const { favorites } = useFavoritesStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFavorites = favorites.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="px-4 sm:px-8 py-8">
      <p className="float-left text-2xl font-bold leading-7">FAVORITES</p>
      <SearchBar
        onSearch={setSearchQuery}
        resultsCount={filteredFavorites.length}
        isLoading={false}
      />
      {filteredFavorites && <CharacterGrid characters={filteredFavorites} />}
    </div>
  );
};

export default Favorites;
