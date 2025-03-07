import heart_unselected from "../assets/heart_unselected.svg";
import heart_selected from "../assets/heart_selected.svg";
import { useFavoritesStore } from "../store/useFavoritesStore.ts";
import { Character } from "../types/characterTypes.ts";
import * as React from "react";

interface HeartButtonProps {
  character: Character;
  size?: string;
}

const HeartButton = ({ character, size = "h-6 w-6" }: HeartButtonProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };


  return (
    <button
      onClick={toggleFavorite}
      className="focus:outline-none z-20 relative"
    >
      <img
        className={`self-center cursor-pointer ${size}`}
        src={isFavorite ? heart_selected : heart_unselected}
        alt={isFavorite ? "liked" : "unliked"}
      />
    </button>
  );
};

export default HeartButton;
