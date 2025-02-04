import { render, screen } from "@testing-library/react";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

describe("Avatar Component", () => {
  it("renders Avatar with custom className", () => {
    render(<Avatar className="test-class" data-testid="avatar" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toHaveClass("test-class");
    expect(avatar).toHaveClass(
      "relative",
      "flex",
      "h-10",
      "w-10",
      "shrink-0",
      "overflow-hidden",
      "rounded-full",
    );
  });

  it("renders AvatarFallback with content", () => {
    render(
      <Avatar>
        <AvatarFallback data-testid="avatar-fallback">JD</AvatarFallback>
      </Avatar>,
    );
    const fallback = screen.getByTestId("avatar-fallback");
    expect(fallback).toHaveTextContent("JD");
    expect(fallback).toHaveClass(
      "flex",
      "h-full",
      "w-full",
      "items-center",
      "justify-center",
      "rounded-full",
      "bg-muted",
    );
  });

  it("renders complete Avatar with image and fallback", () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarImage
          src="/test-image.jpg"
          alt="Test User"
          data-testid="avatar-image"
          onLoadingStatusChange={(status) => status === "loaded"}
        />
        <AvatarFallback data-testid="avatar-fallback">JD</AvatarFallback>
      </Avatar>,
    );

    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByTestId("avatar-fallback")).toBeInTheDocument();
  });

  it("applies custom className to all components", () => {
    render(
      <Avatar className="avatar-custom" data-testid="avatar">
        <AvatarFallback
          className="fallback-custom"
          data-testid="avatar-fallback"
        >
          JD
        </AvatarFallback>
      </Avatar>,
    );

    expect(screen.getByTestId("avatar")).toHaveClass("avatar-custom");
    expect(screen.getByTestId("avatar-fallback")).toHaveClass(
      "fallback-custom",
    );
  });
});
