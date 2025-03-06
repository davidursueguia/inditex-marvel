import { useCharacters } from "../hooks/useCharacters.ts";
import Loading from "../components/Loading.tsx";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import { data } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage.tsx";

const Home = () => {
  const { data: characters, isLoading, isError } = useCharacters();

  return (
    <div className={"pl-[48px] pr-[48px] pt-[48px]"}>
      <SearchBar />
      {isLoading && <Loading />}
      {isError && <ErrorMessage message={'Error al cargar los personajes.'}/>}
      {!isLoading && !isError && data.length === 0 && <p className="text-center">No hay personajes disponibles.</p>}
      <div className="grid grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {characters?.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Home;
