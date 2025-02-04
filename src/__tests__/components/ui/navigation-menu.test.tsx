import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";

// Mock ChevronDown icon
jest.mock("lucide-react", () => ({
  ChevronDown: () => <div data-testid="chevron-down">ChevronDown</div>,
}));

describe("NavigationMenu", () => {
  const TestNavigationMenu = () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <a href="/test">Test Link</a>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  it("renders navigation menu with trigger and content", () => {
    render(<TestNavigationMenu />);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByTestId("chevron-down")).toBeInTheDocument();
  });

  it("shows content when trigger is clicked", () => {
    render(<TestNavigationMenu />);

    const trigger = screen.getByText("Item 1");
    fireEvent.click(trigger);

    expect(screen.getByText("Test Link")).toBeInTheDocument();
  });

  it("applies correct ARIA attributes", () => {
    render(<TestNavigationMenu />);

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("applies custom className to NavigationMenu", () => {
    render(
      <NavigationMenu className="custom-class">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Test</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("custom-class");
  });
});
