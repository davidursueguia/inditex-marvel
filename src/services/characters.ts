import api from "./api";

export interface CharacterApiResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface ComicItem {
  resourceURI: string;
  name: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}

interface SeriesItem {
  resourceURI: string;
  name: string;
}

interface Series {
  available: number;
  collectionURI: string;
  items: SeriesItem[];
  returned: number;
}

interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
}

interface EventItem {
  resourceURI: string;
  name: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: EventItem[];
  returned: number;
}

interface Url {
  type: string;
  url: string;
}

export interface Character {
  id: number,
  name: string,
  description: string,
  modified: string,
  thumbnail: Thumbnail,
  resourceURI: string,
  comics: Comics,
  series: Series,
  stories: Stories,
  events: Events,
  urls: Url[],
  character?: Character
}

export const getCharacters = async () => {
  try {
    const response = await api.get<CharacterApiResponse>("/characters",
      {
        params: {
          limit: 50,
          offset: 0,
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    return null;
  }
};
