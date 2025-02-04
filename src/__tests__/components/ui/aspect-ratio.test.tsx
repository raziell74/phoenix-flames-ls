import { render } from "@testing-library/react";
import { AspectRatio } from "~/components/ui/aspect-ratio";

describe("AspectRatio", () => {
  it("renders with default ratio", () => {
    const { container } = render(
      <AspectRatio>
        <div>Content</div>
      </AspectRatio>,
    );

    const aspectRatioElement = container.firstChild;
    expect(aspectRatioElement).toBeInTheDocument();
  });

  it("renders with custom ratio", () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <div>Content</div>
      </AspectRatio>,
    );

    const aspectRatioElement = container.firstChild;
    expect(aspectRatioElement).toBeInTheDocument();
    expect(aspectRatioElement).toHaveStyle({
      paddingBottom: `${(1 / (16 / 9)) * 100}%`,
    });
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <AspectRatio>
        <div>Test Content</div>
      </AspectRatio>,
    );

    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
