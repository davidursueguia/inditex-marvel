import { useCharacters } from "../hooks/useCharacters.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import ErrorMessage from "../components/ErrorMessage.tsx";
import { useState } from "react";
import { useSearchCharacters } from "../hooks/useSearchCharacters.ts";

const Home = () => {
  const { data: defaultCharacters, isLoading, isError } = useCharacters();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: foundCharacters, isLoading: isSearching } = useSearchCharacters(searchQuery);

  const characters = searchQuery ? foundCharacters : defaultCharacters;

  return (
    <div className={"pl-[48px] pr-[48px] pt-[48px]"}>
      <SearchBar onSearch={setSearchQuery} isLoading={isLoading || isSearching} resultsCount={characters ? characters.length : 0}/>
      {isError && <ErrorMessage message={"Error while loading characters."} />}
      <div className="grid gap-[10px] grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {characters?.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Home;
