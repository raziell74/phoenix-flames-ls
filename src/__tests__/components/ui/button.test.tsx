import { render, screen, fireEvent } from "@testing-library/react";
import { Button, type ButtonProps } from "~/components/ui/button";

describe("Button", () => {
  // Rendering tests
  it("renders button with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
  });

  it("renders as child component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Link Button" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("bg-primary");
  });

  // Variant tests
  it.each([
    ["default", "bg-primary"],
    ["destructive", "bg-destructive"],
    ["outline", "border-input"],
    ["secondary", "bg-secondary"],
    ["ghost", "hover:bg-accent"],
    ["link", "text-primary"],
  ])("applies correct classes for %s variant", (variant, expectedClass) => {
    render(<Button variant={variant as ButtonProps["variant"]}>Button</Button>);
    expect(screen.getByRole("button")).toHaveClass(expectedClass);
  });

  // Size tests
  it.each([
    ["default", "h-9 px-4"],
    ["sm", "h-8"],
    ["lg", "h-10"],
    ["icon", "h-9 w-9"],
  ])("applies correct classes for %s size", (size, expectedClass) => {
    render(<Button size={size as ButtonProps["size"]}>Button</Button>);
    expect(screen.getByRole("button")).toHaveClass(expectedClass);
  });

  // Functionality tests
  it("forwards ref correctly", () => {
    const ref = jest.fn();
    render(<Button ref={ref}>Button</Button>);
    expect(ref).toHaveBeenCalled();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("button")).toHaveClass("disabled:opacity-50");
  });

  // Accessibility tests
  it("has correct attributes when disabled", () => {
    render(
      <Button disabled aria-label="Test button">
        Button
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-label", "Test button");
  });
});
