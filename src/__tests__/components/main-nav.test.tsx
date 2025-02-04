import { render, screen } from "@testing-library/react";
import { MainNav } from "~/app/_components/main-nav";
import { useUser } from "@clerk/nextjs";

// Mock clerk
jest.mock("@clerk/nextjs", () => ({
  useUser: jest.fn(),
  SignInButton: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sign-in-button">{children}</div>
  ),
  SignUpButton: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sign-up-button">{children}</div>
  ),
  UserButton: () => <div data-testid="user-button">UserButton</div>,
}));

// Mock Lucide icon
jest.mock("lucide-react", () => ({
  Flame: () => <div data-testid="flame-icon" />,
}));

describe("MainNav", () => {
  const mockUseUser = useUser as jest.Mock;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it("renders logo and brand name", () => {
    mockUseUser.mockReturnValue({ isSignedIn: false, user: null });
    render(<MainNav />);

    expect(screen.getByTestId("flame-icon")).toBeInTheDocument();
    expect(screen.getByText("Phoenix Flames")).toBeInTheDocument();
  });

  it("shows sign in and create account buttons when user is not signed in", () => {
    mockUseUser.mockReturnValue({ isSignedIn: false, user: null });
    render(<MainNav />);

    expect(screen.getByTestId("sign-in-button")).toBeInTheDocument();
    expect(screen.getByTestId("sign-up-button")).toBeInTheDocument();
    expect(screen.getByText("Create Account")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
