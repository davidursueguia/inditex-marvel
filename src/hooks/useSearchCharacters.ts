import { useQuery } from "@tanstack/react-query";
import { Character } from "../types/characterTypes.ts";
import { searchCharacters } from "../services/characters.ts";

export const useSearchCharacters = (query: string) => {
  return useQuery<Character[], Error>({
    queryKey: ["search", query],
    queryFn: () => searchCharacters(query),
    enabled: !!query,
  });
};
