import { memo, useState } from "react";
import cut from "../assets/cut.svg";
import { useNavigate } from "react-router-dom";
import { Character } from "../types/characterTypes.ts";
import HeartButton from "./HeartButton.tsx";

const CharacterCard = memo(({ character }: { character: Character }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-testid="character-card"
      className="relative pb-6 overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate("/detail/" + character.id)}
    >
      <img
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        alt={character.name}
        className="w-full h-64 object-cover"
      />

      <div className="w-full h-1 bg-[var(--marvel-red)]"></div>
      <div className="relative w-full h-12 overflow-hidden bg-black">
        <div
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-150 transform ${
            hovered ? "scale-y-100 bg-[var(--marvel-red)]" : "scale-y-0 bg-[var(--marvel-red)]"
          } origin-top`}
        ></div>
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-between px-2 py-2 z-10">
          <p className="text-white text-sm uppercase">{character.name}</p>
          <HeartButton character={character} hovered={hovered} size={'h-3 w-3'}/>
        </div>
        <img
          src={cut}
          alt="cut"
          className="filter absolute bottom-[-1px] right-[-1px] h-4 w-4 z-20"
        />
      </div>
    </div>
  );
}, (prevProps, nextProps) => prevProps.character.id === nextProps.character.id);

export default CharacterCard;
