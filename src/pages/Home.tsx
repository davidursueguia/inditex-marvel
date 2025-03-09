import { useCharacters } from "../hooks/useCharacters.ts";
import SearchBar from "../components/SearchBar.tsx";
import ErrorMessage from "../components/ErrorMessage.tsx";
import { useState } from "react";
import { useSearchCharacters } from "../hooks/useSearchCharacters.ts";
import CharacterGrid from "../components/CharacterGrid.tsx";
import CharacterSkeletonGrid from "../components/CharacterSkeletonGrid.tsx";

const Home = () => {
  const { data: defaultCharacters, isLoading, isError } = useCharacters();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: foundCharacters, isLoading: isSearching } = useSearchCharacters(searchQuery);

  const characters = searchQuery ? foundCharacters : defaultCharacters;

  return (
    <div className="px-4 sm:px-6 md:px-12 pt-12">
      <SearchBar onSearch={setSearchQuery} isLoading={isLoading || isSearching}
                 resultsCount={characters ? characters.length : 0} />
      {(isLoading || isSearching) && <CharacterSkeletonGrid />}
      {isError && <ErrorMessage message={"Error while loading characters."} />}
      {characters && <CharacterGrid characters={characters} />}
    </div>
  );
};

export default Home;
