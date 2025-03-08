import { useState } from "react";
import { useFavoritesStore } from "../store/useFavoritesStore.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "../components/SearchBar.tsx";

const Favorites = () => {
  const { favorites } = useFavoritesStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFavorites = favorites.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="pl-12 pr-12 pt-12">
      <p className="float-left text-2xl font-bold leading-7">FAVORITES</p>
      <SearchBar
        onSearch={setSearchQuery}
        resultsCount={filteredFavorites.length}
        isLoading={false}
      />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {filteredFavorites.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
