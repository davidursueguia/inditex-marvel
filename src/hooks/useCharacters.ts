import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../services/characters.ts";
import { Character } from "../types/characterTypes.ts";

export const useCharacters = () => {
  return useQuery<Character[], Error>({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });
};
