export interface ComicApiResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ComicData;
}

export interface ComicData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}

export interface Comic {
  id: number;
  title: string;
  description: string | null;
  modified: string;
  resourceURI: string;
  thumbnail: Thumbnail;
  creators: CreatorList;
  characters: CharacterList;
  series: SeriesSummary;
  stories: StoryList;
  events: EventList;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface CreatorList {
  available: number;
  collectionURI: string;
  items: CreatorSummary[];
  returned: number;
}

export interface CreatorSummary {
  resourceURI: string;
  name: string;
  role: string;
}

export interface CharacterList {
  available: number;
  collectionURI: string;
  items: CharacterSummary[];
  returned: number;
}

export interface CharacterSummary {
  resourceURI: string;
  name: string;
}

export interface SeriesSummary {
  resourceURI: string;
  name: string;
}

export interface StoryList {
  available: number;
  collectionURI: string;
  items: StorySummary[];
  returned: number;
}

export interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

export interface EventList {
  available: number;
  collectionURI: string;
  items: EventSummary[];
  returned: number;
}

export interface EventSummary {
  resourceURI: string;
  name: string;
}
