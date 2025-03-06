import { useEffect, useState } from "react";
import { Character, CharacterApiResponse, getCharacters } from "../services/characters.ts";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response: CharacterApiResponse | null = await getCharacters();
      if (response) {
        setCharacters(response.data.results);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    fetchData().catch((err) => console.error("Error en fetchData:", err));
  }, []);

  return { characters, loading, error };
};
