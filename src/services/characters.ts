import api from "./api";
import { Character, CharacterApiResponse } from "../types/characterTypes.ts";
import { Comic, ComicApiResponse } from "../types/comicTypes.ts";


export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await api.get<CharacterApiResponse>("/characters", {
      params: {
        limit: 50,
        offset: 0,
      },
    });
    console.log("response", response);
    return response.data.data.results;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    throw new Error("Error fetching characters");
  }
};

export const getCharacterById = async (id: string): Promise<Character> => {
  try {
    const response = await api.get<CharacterApiResponse>(`/characters/${id}`);
    console.log("response", response.data.data.results[0]);
    return response.data.data.results[0];
  } catch (error) {
    console.error("Error al obtener el personaje:", error);
    throw new Error("Error fetching character");
  }
};

export const getComicsByCharacterId = async (id: string): Promise<Comic[]> => {
  try {
    const response = await api.get<ComicApiResponse>(`/characters/${id}/comics`);
    return response.data.data.results.sort((a, b) => {
      return new Date(a.modified).getTime() - new Date(b.modified).getTime();
    });
  } catch (error) {
    console.error("Error al obtener los cómics:", error);
    throw new Error("Error fetching comics");
  }
};

export const searchCharacters = async (query: string): Promise<Character[]> => {
  try {
    const response = await api.get<CharacterApiResponse>(`/characters`, {
      params: {
        nameStartsWith: query,
        limit: 50,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error en la búsqueda de personajes:", error);
    throw new Error("Error fetching characters");
  }
};
