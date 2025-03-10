import ErrorMessage from "../ErrorMessage.tsx";
import { render, screen} from "@testing-library/react";

describe('ErrorMessage', () => {
  test('Check if message is renderer', () => {
    render(<ErrorMessage message={'this is an error'} />);
    const text = screen.getByText('this is an error');
    expect(text).toBeInTheDocument();
  });
})
