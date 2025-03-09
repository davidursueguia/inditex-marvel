import HeartButton from "./HeartButton";
import { Character } from "../types/characterTypes";

interface CharacterInfoProps {
  character: Character;
}

const CharacterInfo = ({ character }: CharacterInfoProps) => (
  <div className="mt-4 lg:mt-0 lg:ml-8 flex flex-col justify-center w-full max-w-[640px]">
    <div className="flex w-full justify-between">
      <h1 className="text-2xl sm:text-3xl font-bold">{character.name.toUpperCase()}</h1>
      <HeartButton character={character} />
    </div>
    <p className="mt-2 text-gray-300 text-sm sm:text-base text-left">
      {character.description || "No description available."}
    </p>
  </div>
);

export default CharacterInfo;
