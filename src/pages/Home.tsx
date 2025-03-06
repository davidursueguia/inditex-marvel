import { useCharacters } from "../hooks/useCharacters.ts";
import Loading from "../components/Loading.tsx";
import CharacterCard from "../components/CharacterCard.tsx";

const Home = () => {
  const { characters, loading, error } = useCharacters();

  return (
    <div>
      {loading && <Loading />}
      {error && <p className="text-center text-red-500">Error al cargar los personajes. Inténtalo más tarde.</p>}
      {!loading && !error && characters.length === 0 && <p className="text-center">No hay personajes disponibles.</p>}
      <div className="grid grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Home;
