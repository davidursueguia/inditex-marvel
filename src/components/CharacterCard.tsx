import { useState } from "react";
import HeartIcon from "./HeartIcon";
import cut from "../assets/cut.svg";
import { useNavigate } from "react-router-dom";
import { Character } from "../types/characterTypes.ts";

const CharacterCard = ({ character }: { character: Character }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <div
      className="relative mr-4 pb-[24px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate('/detail/' + character.id)}
    >
      <img
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        alt={character.name}
        className="w-full h-60 object-cover"
      />
      <div className="w-full h-1 bg-red-600"></div>
      <div className="relative w-full h-12 overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${
            hovered ? "bg-red-600" : "bg-black"
          }`}
        ></div>

        <div>
        <p className="text-white text-sm uppercase absolute mt-2 left-2">
          {character.name}
        </p>
        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute right-2 mt-4"
        >
          <HeartIcon filled={favorite} />
        </button>
        </div>
        <img
          src={cut}
          alt="cut"
          className="filter absolute bottom-0 right-0 h-4 w-4"
        />
      </div>
    </div>
  );
};

export default CharacterCard;
