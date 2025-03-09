import { useParams } from "react-router-dom";
import ComicCarrousel from "../components/ComicCarrousel.tsx";
import { useCharacterById } from "../hooks/useCharacterById.ts";
import Loading from "../components/Loading.tsx";
import { useComicsByCharacterId } from "../hooks/useComics.ts";
import ErrorMessage from "../components/ErrorMessage.tsx";
import CharacterInfo from "../components/CharacterInfo.tsx";

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, isError } = useCharacterById(id);
  const { data: comics, isLoading: comicsAreLoading, isError: comicsLoadingError } = useComicsByCharacterId(id);

  if (isLoading) return <Loading />;
  if (isError || !character) return <ErrorMessage message={"Error al cargar el personaje"} />;

  return (
    <div className={'bg-black'}>
      <CharacterInfo character={character} />
      <ComicCarrousel
        comics={comics}
        isLoading={comicsAreLoading}
        isError={comicsLoadingError}
      />
    </div>
  );
};

export default CharacterDetail;
