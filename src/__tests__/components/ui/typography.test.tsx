import { render, screen } from "@testing-library/react";
import * as Typography from "~/components/ui/typography";

describe("Typography Components", () => {
  // Test heading components
  describe("Heading Components", () => {
    it("renders H1 with correct classes", () => {
      render(<Typography.H1>Test H1</Typography.H1>);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toHaveClass(
        "scroll-m-20",
        "text-4xl",
        "font-extrabold",
        "tracking-tight",
        "lg:text-5xl",
      );
      expect(h1).toHaveTextContent("Test H1");
    });

    it("renders H2 with correct classes", () => {
      render(<Typography.H2>Test H2</Typography.H2>);
      const h2 = screen.getByRole("heading", { level: 2 });
      expect(h2).toHaveClass(
        "scroll-m-20",
        "border-b",
        "pb-2",
        "text-3xl",
        "font-semibold",
        "tracking-tight",
        "first:mt-0",
      );
    });

    it("renders H3 with correct classes", () => {
      render(<Typography.H3>Test H3</Typography.H3>);
      const h3 = screen.getByRole("heading", { level: 3 });
      expect(h3).toHaveClass(
        "scroll-m-20",
        "text-2xl",
        "font-semibold",
        "tracking-tight",
      );
    });

    it("renders H4 with correct classes", () => {
      render(<Typography.H4>Test H4</Typography.H4>);
      const h4 = screen.getByRole("heading", { level: 4 });
      expect(h4).toHaveClass(
        "scroll-m-20",
        "text-xl",
        "font-semibold",
        "tracking-tight",
      );
    });
  });

  // Test paragraph and text components
  describe("Text Components", () => {
    it("renders P with correct classes", () => {
      render(<Typography.P>Test paragraph</Typography.P>);
      const p = screen.getByText("Test paragraph");
      expect(p).toHaveClass("leading-7", "[&:not(:first-child)]:mt-6");
    });

    it("renders Lead with correct classes", () => {
      render(<Typography.Lead>Test lead</Typography.Lead>);
      const lead = screen.getByText("Test lead");
      expect(lead).toHaveClass("text-xl", "text-muted-foreground");
    });

    it("renders Muted with correct classes", () => {
      render(<Typography.Muted>Test muted</Typography.Muted>);
      const muted = screen.getByText("Test muted");
      expect(muted).toHaveClass("text-sm", "text-muted-foreground");
    });
  });

  // Test other typography components
  describe("Other Typography Components", () => {
    it("renders Blockquote with correct classes", () => {
      render(<Typography.Blockquote>Test quote</Typography.Blockquote>);
      const quote = screen.getByText("Test quote");
      expect(quote).toHaveClass("mt-6", "border-l-2", "pl-6", "italic");
    });

    it("renders List with correct classes", () => {
      render(
        <Typography.List>
          <li>Test item</li>
        </Typography.List>,
      );
      const list = screen.getByRole("list");
      expect(list).toHaveClass("my-6", "ml-6", "list-disc", "[&>li]:mt-2");
    });

    it("renders InlineCode with correct classes", () => {
      render(<Typography.InlineCode>code</Typography.InlineCode>);
      const code = screen.getByText("code");
      expect(code).toHaveClass(
        "relative",
        "rounded",
        "bg-muted",
        "px-[0.3rem]",
        "py-[0.2rem]",
        "font-mono",
        "text-sm",
        "font-semibold",
      );
    });
  });

  // Test custom class merging
  describe("Custom Classes", () => {
    it("allows custom classes to be merged", () => {
      render(<Typography.H1 className="custom-class">Custom H1</Typography.H1>);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toHaveClass("custom-class");
      expect(h1).toHaveClass("text-4xl"); // Still has default classes
    });
  });

  // Test default export
  describe("Default Export", () => {
    it("exports all typography components", () => {
      expect(Typography.default).toHaveProperty("h1");
      expect(Typography.default).toHaveProperty("h2");
      expect(Typography.default).toHaveProperty("h3");
      expect(Typography.default).toHaveProperty("h4");
      expect(Typography.default).toHaveProperty("p");
      expect(Typography.default).toHaveProperty("blockquote");
      expect(Typography.default).toHaveProperty("list");
      expect(Typography.default).toHaveProperty("inline_code");
      expect(Typography.default).toHaveProperty("pre");
      expect(Typography.default).toHaveProperty("lead");
      expect(Typography.default).toHaveProperty("large");
      expect(Typography.default).toHaveProperty("small");
      expect(Typography.default).toHaveProperty("muted");
    });
  });

  // Add tests for Pre component
  describe("Pre Component", () => {
    it("renders Pre with correct classes", () => {
      render(<Typography.Pre>Test pre</Typography.Pre>);
      const pre = screen.getByText("Test pre");
      expect(pre).toHaveClass(
        "mt-6",
        "rounded-lg",
        "bg-muted",
        "p-4",
        "font-mono",
        "text-sm",
      );
    });
  });

  // Add tests for Large component
  describe("Large Component", () => {
    it("renders Large with correct classes", () => {
      render(<Typography.Large>Test large</Typography.Large>);
      const large = screen.getByText("Test large");
      expect(large).toHaveClass("text-lg", "font-semibold");
    });
  });

  // Add tests for Small component
  describe("Small Component", () => {
    it("renders Small with correct classes", () => {
      render(<Typography.Small>Test small</Typography.Small>);
      const small = screen.getByText("Test small");
      expect(small).toHaveClass("text-sm", "font-medium", "leading-none");
    });
  });

  // Test component prop spreading
  describe("Component Props", () => {
    it("spreads additional props to components", () => {
      render(
        <Typography.P
          data-testid="test-p"
          onClick={() => {
            /* intentionally empty */
          }}
        >
          Test paragraph
        </Typography.P>,
      );
      const p = screen.getByTestId("test-p");
      expect(p).toHaveAttribute("data-testid", "test-p");
    });
  });
});
