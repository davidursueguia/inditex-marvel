import { useCharacters } from "../hooks/useCharacters.ts";
import Loading from "../components/Loading.tsx";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import { data } from "react-router-dom";
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
      <SearchBar onSearch={setSearchQuery} />
      {characters && <p className="text-lg text-justify mb-10">{characters.length} RESULTS</p>}
      {isLoading || isSearching && <Loading />}
      {isError && <ErrorMessage message={"Error while loading characters."} />}
      {!isLoading && !isError && data.length === 0 && <p className="text-center">No characters available.</p>}
      <div className="grid grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {characters?.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Home;
