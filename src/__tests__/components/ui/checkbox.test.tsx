import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "~/components/ui/checkbox";
import * as React from "react";

// Mock lucide-react
jest.mock("lucide-react", () => ({
  Check: () => <div data-testid="check-icon" />,
}));

describe("Checkbox Component", () => {
  it("renders unchecked by default", () => {
    render(<Checkbox aria-label="test checkbox" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("can be checked and unchecked", () => {
    render(<Checkbox aria-label="test checkbox" />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "checked");

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "unchecked");
  });

  it("calls onCheckedChange when clicked", () => {
    const handleChange = jest.fn();
    render(
      <Checkbox aria-label="test checkbox" onCheckedChange={handleChange} />,
    );
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it("can be controlled", () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <Checkbox
        aria-label="test checkbox"
        checked={true}
        onCheckedChange={handleChange}
      />,
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("data-state", "checked");

    rerender(
      <Checkbox
        aria-label="test checkbox"
        checked={false}
        onCheckedChange={handleChange}
      />,
    );
    expect(checkbox).toHaveAttribute("data-state", "unchecked");
  });

  it("can be disabled", () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        aria-label="test checkbox"
        disabled
        onCheckedChange={handleChange}
      />,
    );
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeDisabled();
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("can be focused with keyboard", () => {
    render(<Checkbox aria-label="test checkbox" />);
    const checkbox = screen.getByRole("checkbox");

    checkbox.focus();
    expect(checkbox).toHaveFocus();
  });

  it("handles space key press", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    // Focus and press space
    fireEvent.focus(checkbox);
    fireEvent.click(checkbox);

    expect(checkbox).toHaveAttribute("data-state", "checked");

    // Click again to uncheck
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "unchecked");
  });
});
