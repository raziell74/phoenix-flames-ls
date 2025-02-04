import { render, screen } from "@testing-library/react";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";

describe("Card Components", () => {
  // Test Card component
  describe("Card", () => {
    it("renders with default classes", () => {
      render(<Card>content</Card>);
      expect(screen.getByText("content")).toHaveClass(
        "rounded-xl border bg-card text-card-foreground shadow",
      );
    });

    it("merges custom className", () => {
      render(<Card className="custom-class">content</Card>);
      expect(screen.getByText("content")).toHaveClass("custom-class");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Card ref={ref}>content</Card>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  // Test CardHeader component
  describe("CardHeader", () => {
    it("renders with default classes", () => {
      render(<CardHeader>header</CardHeader>);
      expect(screen.getByText("header")).toHaveClass(
        "flex flex-col space-y-1.5 p-6",
      );
    });
  });

  // Test CardTitle component
  describe("CardTitle", () => {
    it("renders with default classes", () => {
      render(<CardTitle>title</CardTitle>);
      expect(screen.getByText("title")).toHaveClass(
        "font-semibold leading-none tracking-tight",
      );
    });
  });

  // Test CardDescription component
  describe("CardDescription", () => {
    it("renders with default classes", () => {
      render(<CardDescription>description</CardDescription>);
      expect(screen.getByText("description")).toHaveClass(
        "text-sm text-muted-foreground",
      );
    });
  });

  // Test CardContent component
  describe("CardContent", () => {
    it("renders with default classes", () => {
      render(<CardContent>content</CardContent>);
      expect(screen.getByText("content")).toHaveClass("p-6 pt-0");
    });
  });

  // Test CardFooter component
  describe("CardFooter", () => {
    it("renders with default classes", () => {
      render(<CardFooter>footer</CardFooter>);
      expect(screen.getByText("footer")).toHaveClass(
        "flex items-center p-6 pt-0",
      );
    });
  });

  // Test full card composition
  it("renders a complete card structure", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Card Footer")).toBeInTheDocument();
  });
});
