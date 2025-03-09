import CharacterCard from "./CharacterCard";
import { Character } from "../types/characterTypes";
import { memo } from "react";

interface CharacterGridProps {
  characters: Character[];
}

const CharacterGrid = memo(({ characters }: CharacterGridProps) => (
  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
    {characters.map((char) => (
      <CharacterCard key={char.id} character={char} />
    ))}
  </div>
));

export default CharacterGrid;
