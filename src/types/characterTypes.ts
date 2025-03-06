export interface CharacterApiResponse {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            Data;
}

export interface Data {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Character[];
}

export interface Comics {
  available:     number;
  collectionURI: string;
  items:         ComicsItem[];
  returned:      number;
}

export interface ComicsItem {
  resourceURI: string;
  name:        string;
}

export interface Stories {
  available:     number;
  collectionURI: string;
  items:         ComicsItem[];
  returned:      number;
}



export interface Character {
  id: number,
  name: string,
  description: string,
  thumbnail: Thumbnail,
  character?: Character
}
export interface Thumbnail {
  path:      string;
  extension: Extension;
}

export enum Extension {
  GIF = "gif",
  Jpg = "jpg",
}
