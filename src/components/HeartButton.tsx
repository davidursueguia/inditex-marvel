import heart_unselected from "../assets/heart_unselected.svg";
import heart_selected from "../assets/heart_selected.svg";
import heart_union from "../assets/heart_union.svg";
import { useFavoritesStore } from "../store/useFavoritesStore.ts";
import { Character } from "../types/characterTypes.ts";
import * as React from "react";
import { memo } from "react";

interface HeartButtonProps {
  character: Character;
  size?: string;
  hovered?: boolean;
}

const HeartButton = memo(({ character, size = "h-6 w-6", hovered }: HeartButtonProps) => {
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
          src={
            isFavorite && hovered
              ? heart_union
              : isFavorite
                ? heart_selected
                : heart_unselected
          }
          alt={isFavorite ? "liked" : "unliked"}
        />
      </button>
    );
  }, (prevProps, nextProps) =>
    prevProps.character.id === nextProps.character.id &&
    prevProps.hovered === nextProps.hovered,
);

export default HeartButton;
