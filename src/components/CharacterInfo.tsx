import { Character } from "../types/characterTypes.ts";
import HeartButton from "./HeartButton.tsx";

interface CharacterInfoProps {
  character: Character;
}

const CharacterInfo = ({ character }: CharacterInfoProps) => (
  <div
    className="flex flex-col md:!flex-row lg:!flex-row justify-self-center text-white px-4 lg:px-0 max-w-[960px]">
    <img
      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      alt={character.name}
      className="w-full h-full object-cover sm:!h-[500px] sm:!w-full"
    />
    <div className="lg:ml-8 flex flex-col justify-center w-full">
      <div className="flex md:ml-11 justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold">{character.name.toUpperCase()}</h1>
        <HeartButton character={character} />
      </div>
      <p className="self-start md:!ml-11 lg:!ml-11 mt-2 text-gray-300 text-sm sm:text-base sm:text-start sm:ml-7 sm:pb-9">
        {character.description || "No description available."}
      </p>
    </div>
  </div>
);

export default CharacterInfo;
