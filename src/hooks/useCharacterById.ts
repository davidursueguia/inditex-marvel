import { useQuery } from "@tanstack/react-query";
import { Character } from "../types/characterTypes.ts";
import { getCharacterById } from "../services/characters.ts";

export const useCharacterById = (id?: string) => {
  return useQuery<Character, Error>({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id!),
    enabled: !!id,
  });
};
