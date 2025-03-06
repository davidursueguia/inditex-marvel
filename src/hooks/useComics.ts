import { useQuery } from "@tanstack/react-query";
import { getComicsByCharacterId } from "../services/characters.ts";
import { Comic } from "../types/comicTypes.ts";

export const useComicsByCharacterId = (id?: string) => {
  return useQuery<Comic[], Error>({
    queryKey: ["comics", id],
    queryFn: ()=> getComicsByCharacterId(id!),
    enabled: !!id,
  });
};
