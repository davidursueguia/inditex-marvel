import api from "../api.ts";
import { getCharacterById, getCharacters, getComicsByCharacterId, searchCharacters } from "../characters.ts";
import { mockCharacterApiResponse } from "../../../__mocks__/mockCharacterApiResponse.ts";
import { mockComicApiResponse } from "../../../__mocks__/mockComicApiResponse.ts";

jest.mock("../api");
beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
})

describe("Service Tests", () => {

  describe("getCharacters", () => {
    it("should return a list of characters when the request is successful", async () => {
      (api.get as jest.Mock).mockResolvedValue({ data: mockCharacterApiResponse });

      const result = await getCharacters();
      expect(result).toEqual(mockCharacterApiResponse.data.results);
      expect(api.get).toHaveBeenCalledWith("/characters", {
        params: { limit: 50, offset: 0 },
      });
    });

    it("should throw an error if the API fails", async () => {
      (api.get as jest.Mock).mockRejectedValue(new Error("API error"));

      await expect(getCharacters()).rejects.toThrow("Error fetching characters");
    });
  });

  describe("getCharacterById", () => {
    it("should return a specific character with a valid ID", async () => {
      (api.get as jest.Mock).mockResolvedValue({ data: mockCharacterApiResponse });

      const result = await getCharacterById("1");
      expect(result).toEqual(mockCharacterApiResponse.data.results[0]);
      expect(api.get).toHaveBeenCalledWith("/characters/1");
    });

    it("should throw an error if the API fails", async () => {
      (api.get as jest.Mock).mockRejectedValue(new Error("API error"));

      await expect(getCharacterById("1")).rejects.toThrow("Error fetching character");
    });
  });

  describe("getComicsByCharacterId", () => {
    beforeEach(() => {
      (api.get as jest.Mock).mockReset();
    });

    it("should return a list of comics for a specific character", async () => {
      (api.get as jest.Mock).mockResolvedValue({ data: mockComicApiResponse });

      const result = await getComicsByCharacterId("1");
      expect(result).toEqual(mockComicApiResponse.data.results);
      expect(api.get).toHaveBeenCalledWith("/characters/1/comics", {
        params: { limit: 20, orderBy: "onsaleDate" },
      });
    });

    it("should throw an error if the API fails", async () => {
      (api.get as jest.Mock).mockRejectedValue(new Error("API error"));

      await expect(getComicsByCharacterId("1")).rejects.toThrow("Error fetching comics");
    });
  });

  describe("searchCharacters", () => {
    it("should return characters that match the search term", async () => {
      (api.get as jest.Mock).mockResolvedValue({ data: mockCharacterApiResponse });

      const result = await searchCharacters("Spider");
      expect(result).toEqual(mockCharacterApiResponse.data.results);
      expect(api.get).toHaveBeenCalledWith("/characters", {
        params: { nameStartsWith: "Spider", limit: 50 },
      });
    });

    it("should return an empty array if there are no matches", async () => {
      (api.get as jest.Mock).mockResolvedValue({ data: { data: { results: [] } } });

      const result = await searchCharacters("NoResult");
      expect(result).toEqual([]);
    });

    it("should throw an error if the API fails", async () => {
      (api.get as jest.Mock).mockRejectedValue(new Error("API error"));

      await expect(searchCharacters("Spider")).rejects.toThrow("Error fetching characters");
    });
  });
});
