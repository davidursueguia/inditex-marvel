import { Comic } from "../../types/comicTypes.ts";
import { render, screen } from "@testing-library/react";
import ComicCarrousel from "../ComicCarrousel.tsx";

const mockComics: Comic[] = [
  {
    resourceURI: "1",
    title: "The Amazing Spider-Man",
    thumbnail: {
      path: "https://example.com/spider-man",
      extension: "jpg",
    },
    id: 0,
    description: null,
    modified: "",
    creators: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/2/creators",
      items: [
        { resourceURI: "http://marvel.com/creator/3", name: "Warren Ellis", role: "Writer" },
      ],
      returned: 1,
    },
    characters: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/2/characters",
      items: [
        { resourceURI: "http://marvel.com/character/2", name: "Iron Man" },
      ],
      returned: 1,
    },
    series: {
      resourceURI: "http://gateway.marvel.com/v1/public/series/2",
      name: "Iron Man: Extremis (2024)",
    },
    stories: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/2/stories",
      items: [
        { resourceURI: "http://marvel.com/story/3", name: "Cover #2", type: "cover" },
      ],
      returned: 1,
    },
    events: {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    },
  },
  {
    resourceURI: "2",
    title: "Iron Man: Extremis",
    thumbnail: {
      path: "https://example.com/iron-man",
      extension: "jpg",
    },
    id: 0,
    description: null,
    modified: "",
    creators: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/2/creators",
      items: [
        { resourceURI: "http://marvel.com/creator/3", name: "Warren Ellis", role: "Writer" },
      ],
      returned: 1,
    },
    characters: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/2/characters",
      items: [
        { resourceURI: "http://marvel.com/character/2", name: "Iron Man" },
      ],
      returned: 1,
    },
    series: {
      resourceURI: "http://gateway.marvel.com/v1/public/series/2",
      name: "Iron Man: Extremis (2024)",
    },
    stories: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/2/stories",
      items: [
        { resourceURI: "http://marvel.com/story/3", name: "Cover #2", type: "cover" },
      ],
      returned: 1,
    },
    events: {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    },
  },
];
describe("ComicCarrousel", () => {
  it("should render the component", () => {
    render(<ComicCarrousel comics={mockComics} />);
    expect(screen.getByText("COMICS")).toBeInTheDocument();
    expect(screen.getByText('The Amazing Spider-Man')).toBeInTheDocument();
    expect(screen.getByText("Iron Man: Extremis")).toBeInTheDocument();
  });

  it("should render error message if isError is true", () => {
    render(<ComicCarrousel isError={true} />);
    expect(screen.getByText("Error while loading chapters")).toBeInTheDocument();
  });

  it("should render every comic with his image and title", () => {
    render(<ComicCarrousel comics={mockComics} />);

    expect(screen.getByText("The Amazing Spider-Man")).toBeInTheDocument();
    expect(screen.getByText("Iron Man: Extremis")).toBeInTheDocument();

    const spiderManImage = screen.getByAltText("The Amazing Spider-Man");
    expect(spiderManImage).toHaveAttribute("src", "https://example.com/spider-man.jpg");

    const ironManImage = screen.getByAltText("Iron Man: Extremis");
    expect(ironManImage).toHaveAttribute("src", "https://example.com/iron-man.jpg");
  });
});
