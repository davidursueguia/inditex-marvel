import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CharacterCard from "../CharacterCard.tsx";
import { Character, Extension } from "../../types/characterTypes.ts";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockCharacter: Character = {
  id: 1,
  name: "Spider-Man",
  thumbnail: {
    path: "https://example.com/spider-man",
    extension: Extension.Jpg,
  },
  description: "Friendly neighborhood Spider-Man",
};

describe("CharacterCard", () => {
  it("should render with the character name", async () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    });
  });

  it("should render the character img with the correct src", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>,
    );

    const imageElement = screen.getByAltText("Spider-Man");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://example.com/spider-man.jpg",
    );
  });

  it("should navigate to the detail character page", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>,
    );

    const cardElement = screen.getByText("Spider-Man");
    fireEvent.click(cardElement);
    expect(mockNavigate).toHaveBeenCalledWith("/detail/1");
  });

  it("should render cut.svg", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );

    const cutImage = screen.getByAltText("cut");
    expect(cutImage).toBeInTheDocument();
    expect(cutImage).toHaveAttribute("src", "svgMock");
  });
});
