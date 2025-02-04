import { render, screen } from "@testing-library/react";
import Home from "~/app/page";
import { useInView } from "framer-motion";
import type { ImageProps } from "next/image";
import type { HTMLProps, ReactNode } from "react";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: function Image({ alt, src, ...props }: Partial<ImageProps>) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} src={src?.toString()} {...props} />;
  },
}));

interface MotionProps {
  children?: ReactNode;
  [key: string]: unknown;
}

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: MotionProps) => (
      <div {...props}>{children}</div>
    ),
    h2: ({ children, ...props }: MotionProps) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: MotionProps) => <p {...props}>{children}</p>,
  },
  useInView: jest.fn(),
}));

// Mock lucide-react icons
jest.mock("lucide-react", () => ({
  ArrowRight: () => <span data-testid="arrow-right-icon" />,
}));

describe("Home Page", () => {
  beforeEach(() => {
    // Mock useInView to return true by default
    (useInView as jest.Mock).mockReturnValue(true);
  });

  it("renders the hero section with correct content", () => {
    render(<Home />);

    expect(screen.getByText("Phoenix")).toBeInTheDocument();
    expect(screen.getByText("Flames")).toBeInTheDocument();
    expect(
      screen.getByText(/Join the most prestigious FFXI guild/),
    ).toBeInTheDocument();
    expect(screen.getByText("Join Our Link Shell")).toBeInTheDocument();
    expect(screen.getByTestId("arrow-right-icon")).toBeInTheDocument();
  });

  it("renders the about section with legacy content", () => {
    render(<Home />);

    expect(screen.getByText("Our Legacy")).toBeInTheDocument();
    expect(
      screen.getByText(/Founded in the realm of Alexandria/),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Guild Gathering")).toBeInTheDocument();
  });

  it("renders all feature cards", () => {
    render(<Home />);

    expect(screen.getByText("Why Join Us?")).toBeInTheDocument();
    expect(screen.getByText("Weekly Raids")).toBeInTheDocument();
    expect(screen.getByText("Active Community")).toBeInTheDocument();
    expect(screen.getByText("Guild Events")).toBeInTheDocument();
  });

  it("renders the call to action section", () => {
    render(<Home />);

    expect(screen.getByText("Ready for Adventure?")).toBeInTheDocument();
    expect(screen.getByText(/Join Phoenix Flames today/)).toBeInTheDocument();
    expect(screen.getByText("Apply Now")).toBeInTheDocument();
  });

  it("handles section visibility with useInView", () => {
    // Mock sections as not in view
    (useInView as jest.Mock)
      .mockReturnValueOnce(false) // section1
      .mockReturnValueOnce(false) // section2
      .mockReturnValueOnce(false); // section3

    render(<Home />);

    // Re-render with sections in view
    (useInView as jest.Mock)
      .mockReturnValueOnce(true) // section1
      .mockReturnValueOnce(true) // section2
      .mockReturnValueOnce(true); // section3

    render(<Home />);
  });
});
