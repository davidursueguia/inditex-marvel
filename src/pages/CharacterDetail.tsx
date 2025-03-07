import { useParams } from "react-router-dom";
import ComicCarrousel from "../components/ComicCarrousel.tsx";
import { useCharacterById } from "../hooks/useCharacterById.ts";
import Loading from "../components/Loading.tsx";
import { useComicsByCharacterId } from "../hooks/useComics.ts";
import ErrorMessage from "../components/ErrorMessage.tsx";
import HeartButton from "../components/HeartButton.tsx";
import cut from "../assets/cut.svg";

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, isError } = useCharacterById(id);
  const { data: comics, isLoading: comicsAreLoading, isError: comicsLoadingError } = useComicsByCharacterId(id);

  if (isLoading) return <Loading />;
  if (isError || !character) return <ErrorMessage message={"Error al cargar el personaje"} />;

  return (
    <div>
      <div className="bg-black text-white flex items-center justify-center h-[320px] w-full px-8 lg:px-16 relative">
        <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-8 flex flex-col justify-center">
          <div className="flex w-full justify-between">
            <h1 className="text-3xl font-bold">{character.name.toUpperCase()}</h1>
            <HeartButton character={character} />
          </div>
          <p className="mt-2 text-gray-300 max-w-2xl text-left">
            {character.description || "No description available."}
          </p>
        </div>
        <img
          className="h-6 w-6 absolute bottom-[-3px] right-[-3px]"
          src={cut}
          alt={"cut"}
        />
      </div>
      <ComicCarrousel
        comics={comics}
        isLoading={comicsAreLoading}
        isError={comicsLoadingError}
      />
    </div>
  );
};

export default CharacterDetail;
