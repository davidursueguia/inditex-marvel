import { useParams } from "react-router-dom";
import ComicCarrousel from "../components/ComicCarrousel.tsx";
import { useCharacterById } from "../hooks/useCharacterById.ts";
import Loading from "../components/Loading.tsx";
import { useComicsByCharacterId } from "../hooks/useComics.ts";
import ErrorMessage from "../components/ErrorMessage.tsx";
import cut from "../assets/cut.svg";
import CharacterInfo from "../components/CharacterInfo.tsx";

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, isError } = useCharacterById(id);
  const { data: comics, isLoading: comicsAreLoading, isError: comicsLoadingError } = useComicsByCharacterId(id);

  if (isLoading) return <Loading />;
  if (isError || !character) return <ErrorMessage message={"Error al cargar el personaje"} />;

  return (
    <div>
      <div className="bg-black text-white flex flex-col lg:flex-row items-center lg:items-start justify-center h-auto lg:h-[320px] w-full px-4 sm:px-8 lg:px-16 relative py-8 lg:py-0">
        <div className="w-full sm:w-64 h-64 overflow-hidden rounded-lg shadow-lg">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </div>
        <CharacterInfo character={character} />
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
