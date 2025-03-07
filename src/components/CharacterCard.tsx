import { useState } from "react";
import cut from "../assets/cut.svg";
import { useNavigate } from "react-router-dom";
import { Character } from "../types/characterTypes.ts";
import HeartButton from "./HeartButton.tsx";

const CharacterCard = ({ character }: { character: Character }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
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

      <div className="w-full h-1 bg-red-600"/>

      <div className="relative w-full h-12 overflow-hidden">
        <div
          className={`absolute  bottom-0 left-0 w-full h-full transition-all duration-300 ${
            hovered ? "bg-red-600" : "bg-black"
          }`}
        ></div>

        <div className="absolute left-0 w-full flex items-center justify-between px-2 py-2 z-10">
          <p className="text-white text-sm uppercase">{character.name}</p>

          <HeartButton character={character} hovered={hovered} />
        </div>

        <img
          src={cut}
          alt="cut"
          className="filter fill-current absolute bottom-[-1px] right-[-1px] h-4 w-4 z-20"
        />
      </div>
    </div>
  );
};

export default CharacterCard;
