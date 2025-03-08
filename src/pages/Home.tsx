import { useCharacters } from "../hooks/useCharacters.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import ErrorMessage from "../components/ErrorMessage.tsx";
import { useState } from "react";
import { useSearchCharacters } from "../hooks/useSearchCharacters.ts";
import CharacterCardSkeleton from "../components/CharacterCardSkeleton.tsx";

const Home = () => {
  const { data: defaultCharacters, isLoading, isError } = useCharacters();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: foundCharacters, isLoading: isSearching } = useSearchCharacters(searchQuery);

  const characters = searchQuery ? foundCharacters : defaultCharacters;

  return (
    <div className="px-4 sm:px-6 md:px-12 pt-12">
      <SearchBar onSearch={setSearchQuery} isLoading={isLoading || isSearching}
                 resultsCount={characters ? characters.length : 0} />
      {(isLoading || isSearching) &&
        <div className={'grid grid-cols-7 gap-1'}>{Array.from({ length: 12 }).map((_, index) => (
          <CharacterCardSkeleton key={index} />
        ))}</div>}
      {isError && <ErrorMessage message={"Error while loading characters."} />}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {characters?.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Home;
