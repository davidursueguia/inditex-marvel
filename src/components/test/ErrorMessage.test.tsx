import ErrorMessage from "../ErrorMessage.tsx";
import { render, screen} from "@testing-library/react";

test("Error message", () => {
  render(<ErrorMessage message={'this is an error'} />);
  const heading = screen.getByText("this is an error");
  expect(heading).toBeInTheDocument();
});
