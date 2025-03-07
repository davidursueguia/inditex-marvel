import { create } from "zustand";
import { Character } from "../types/characterTypes";

interface FavoritesStore {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],
  addFavorite: (character) =>
    set((state) => ({
      favorites: [...state.favorites, character],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((char) => char.id !== id),
    })),
}));
