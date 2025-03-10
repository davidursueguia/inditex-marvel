import { MemoryRouter } from "react-router-dom";
import CharacterInfo from "../CharacterInfo.tsx";
import { Character, Extension } from "../../types/characterTypes.ts";
import { render, screen } from "@testing-library/react";

const mockCharacter: Character = {
  id: 1,
  name: "Spider-Man",
  thumbnail: {
    path: "https://example.com/spider-man",
    extension: Extension.Jpg,
  },
  description: "Friendly neighborhood Spider-Man",
};


describe("CharacterInfo", () => {
  it("should render the component", () => {
    render(<MemoryRouter><CharacterInfo character={mockCharacter} /></MemoryRouter>);

    expect(screen.getByText(mockCharacter.name.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(mockCharacter.description)).toBeInTheDocument();
  });

  it("should render the character img", () => {
    render(<CharacterInfo character={mockCharacter} />);

    const imageElement = screen.getByAltText("Spider-Man");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://example.com/spider-man.jpg",
    );
  });
});
