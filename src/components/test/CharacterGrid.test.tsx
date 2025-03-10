import { Character, Extension } from "../../types/characterTypes.ts";
import { render, screen } from "@testing-library/react";
import CharacterGrid from "../CharacterGrid.tsx";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockCharacters: Character[] = [
  {
    id: 1,
    name: "Spider-Man",
    thumbnail: {
      path: "https://example.com/spider-man",
      extension: Extension.Jpg,
    },
    description: "Friendly neighborhood Spider-Man",
  },
  {
    id: 2,
    name: "Iron Man",
    thumbnail: {
      path: "https://example.com/iron-man",
      extension: Extension.Jpg,
    },
    description: "Genius, billionaire, playboy, philanthropist.",
  },
];
describe("CharacterGrid", () => {
  it("should render the component", () => {
    render(<MemoryRouter><CharacterGrid characters={mockCharacters} /></MemoryRouter>);
    expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    expect(screen.getByText("Iron Man")).toBeInTheDocument();
  });

  it("should render as many CharacterCard as characters are provided", () => {
    render(<MemoryRouter><CharacterGrid characters={mockCharacters} /></MemoryRouter>);
    const cards = screen.getAllByTestId("character-card");
    expect(cards).toHaveLength(2);
  });

  it("should not render any CharacterCard characters are not provided", () => {
    render(<MemoryRouter><CharacterGrid characters={[]} /></MemoryRouter>);
    const cards = screen.queryAllByTestId("character-card");
    expect(cards).toHaveLength(0);
  });
});
