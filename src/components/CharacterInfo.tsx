import { Character } from "../types/characterTypes.ts";
import HeartButton from "./HeartButton.tsx";
import cut from "../assets/cut.svg";

interface CharacterInfoProps {
  character: Character;
}

const CharacterInfo = ({ character }: CharacterInfoProps) => (
  <div className="flex flex-col md:!flex-row lg:!flex-row w-full justify-self-center text-white px-4 lg:px-0 max-w-[960px]">
    <div className="w-full lg:w-64 overflow-hidden rounded-lg shadow-lg mb-4 lg:mb-0 ">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="w-full h-full object-cover sm:!h-[500px] sm:!w-full"
      />
    </div>
    <div className="lg:ml-8 flex flex-col justify-center w-full">
      <div className="flex md:ml-11 ml-7 justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold">{character.name.toUpperCase()}</h1>
        <HeartButton character={character} />
      </div>
      <p className="self-start ml-6 mt-2 text-gray-300 text-sm sm:text-base sm:text-start sm:ml-7 sm:pb-9">
        {character.description || "No description available."}
      </p>
    </div>
    <img
      src={cut}
      alt="cut"
      className="sticky right-0 bottom-0 self-end mb-[-2px] mr-[-17px] sm:!mb-[-1px] sm:!mr-[-16px] md:!mr-[-16px] lg:!mr-[-1px]"
    />
  </div>
);

export default CharacterInfo;
