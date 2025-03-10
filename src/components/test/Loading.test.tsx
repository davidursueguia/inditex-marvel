import { render, screen } from "@testing-library/react";
import Loading from "../Loading.tsx";

describe("Loading", () => {
  it("Check if loading renders", () => {
    render(<Loading />);
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });
});
