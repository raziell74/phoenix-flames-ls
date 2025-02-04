import { render, screen, fireEvent } from "@testing-library/react";
import * as DropdownMenuPrimitive from "~/components/ui/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
} from "~/components/ui/dropdown-menu";

// Mock icons
jest.mock("lucide-react", () => ({
  Circle: () => <div data-testid="circle-icon" />,
  Check: () => <div data-testid="check-icon" />,
  ChevronRight: () => <div data-testid="chevron-right-icon" />,
}));

describe("DropdownMenu", () => {
  it("renders dropdown menu and shows content when triggered", async () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const item = await screen.findByText("Item 1");
    expect(item).toBeInTheDocument();
  });

  it("handles checkbox items correctly", async () => {
    const onCheckedChange = jest.fn();

    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem onCheckedChange={onCheckedChange}>
            Checkbox Item
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const checkbox = await screen.findByText("Checkbox Item");
    fireEvent.click(checkbox);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("handles radio group selection", async () => {
    const onValueChange = jest.fn();

    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="1" onValueChange={onValueChange}>
            <DropdownMenuRadioItem value="1">Option 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="2">Option 2</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const option = await screen.findByText("Option 2");
    fireEvent.click(option);
    expect(onValueChange).toHaveBeenCalledWith("2");
  });

  it("renders label with correct styling", async () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu Label</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const label = await screen.findByText("Menu Label");
    expect(label).toHaveClass("px-2", "py-1.5", "text-sm", "font-semibold");
  });
});

describe("DropdownMenu Components", () => {
  describe("Basic Dropdown Components", () => {
    it("renders dropdown menu with trigger and content", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu open>
          <DropdownMenuPrimitive.DropdownMenuTrigger>
            Open
          </DropdownMenuPrimitive.DropdownMenuTrigger>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuItem>
              Item 1
            </DropdownMenuPrimitive.DropdownMenuItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      expect(screen.getByText("Open")).toBeInTheDocument();
      expect(screen.getByText("Item 1")).toBeInTheDocument();
    });

    it("renders dropdown menu items with correct classes", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuItem className="test-class">
              Test Item
            </DropdownMenuPrimitive.DropdownMenuItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const item = screen.getByText("Test Item");
      expect(item).toHaveClass(
        "relative",
        "flex",
        "cursor-default",
        "select-none",
        "items-center",
        "gap-2",
        "rounded-sm",
        "px-2",
        "py-1.5",
        "text-sm",
        "outline-none",
        "transition-colors",
        "focus:bg-accent",
        "focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
        "[&>svg]:size-4",
        "[&>svg]:shrink-0",
        "test-class",
      );
    });
  });

  describe("Checkbox and Radio Items", () => {
    it("renders checkbox item with correct classes and checked state", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuCheckboxItem checked={true}>
              Checkbox Item
            </DropdownMenuPrimitive.DropdownMenuCheckboxItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const checkbox = screen.getByText("Checkbox Item");
      expect(checkbox).toHaveClass(
        "relative",
        "flex",
        "cursor-default",
        "select-none",
        "items-center",
        "rounded-sm",
        "py-1.5",
        "pl-8",
        "pr-2",
        "text-sm",
      );
    });

    it("renders radio item with correct classes", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuRadioGroup>
              <DropdownMenuPrimitive.DropdownMenuRadioItem value="test">
                Radio Item
              </DropdownMenuPrimitive.DropdownMenuRadioItem>
            </DropdownMenuPrimitive.DropdownMenuRadioGroup>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const radio = screen.getByText("Radio Item");
      expect(radio).toHaveClass(
        "relative",
        "flex",
        "cursor-default",
        "select-none",
        "items-center",
        "rounded-sm",
        "py-1.5",
        "pl-8",
        "pr-2",
        "text-sm",
      );
    });
  });

  describe("Label and Separator", () => {
    it("renders label with correct classes", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenuLabel inset>
          Label
        </DropdownMenuPrimitive.DropdownMenuLabel>,
      );

      const label = screen.getByText("Label");
      expect(label).toHaveClass(
        "px-2",
        "py-1.5",
        "text-sm",
        "font-semibold",
        "pl-8",
      );
    });

    it("renders separator with correct classes", () => {
      render(<DropdownMenuPrimitive.DropdownMenuSeparator />);

      const separator = screen.getByRole("separator");
      expect(separator).toHaveClass("-mx-1", "my-1", "h-px", "bg-muted");
    });
  });

  describe("Sub Menu Components", () => {
    it("renders sub trigger with correct classes", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuSub>
              <DropdownMenuPrimitive.DropdownMenuSubTrigger>
                Sub Menu
              </DropdownMenuPrimitive.DropdownMenuSubTrigger>
            </DropdownMenuPrimitive.DropdownMenuSub>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const subTrigger = screen.getByText("Sub Menu");
      expect(subTrigger).toHaveClass(
        "flex",
        "cursor-default",
        "select-none",
        "items-center",
        "gap-2",
        "rounded-sm",
        "px-2",
        "py-1.5",
        "text-sm",
        "outline-none",
      );
    });

    it("renders sub content with correct classes", async () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuSub defaultOpen>
              <DropdownMenuPrimitive.DropdownMenuSubTrigger>
                Trigger
              </DropdownMenuPrimitive.DropdownMenuSubTrigger>
              <DropdownMenuPrimitive.DropdownMenuSubContent forceMount>
                Sub Content
              </DropdownMenuPrimitive.DropdownMenuSubContent>
            </DropdownMenuPrimitive.DropdownMenuSub>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const subContent = await screen.findByText("Sub Content");
      expect(subContent).toHaveClass(
        "z-50",
        "min-w-[8rem]",
        "overflow-hidden",
        "rounded-md",
        "border",
        "bg-popover",
        "p-1",
        "text-popover-foreground",
        "shadow-lg",
      );
    });
  });

  describe("Shortcut Component", () => {
    it("renders shortcut with correct classes", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenuShortcut>
          ⌘K
        </DropdownMenuPrimitive.DropdownMenuShortcut>,
      );

      const shortcut = screen.getByText("⌘K");
      expect(shortcut).toHaveClass(
        "ml-auto",
        "text-xs",
        "tracking-widest",
        "opacity-60",
      );
    });
  });

  describe("Props and Variants", () => {
    it("handles inset prop on MenuItem", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuItem inset>
              Inset Item
            </DropdownMenuPrimitive.DropdownMenuItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const item = screen.getByText("Inset Item");
      expect(item).toHaveClass("pl-8");
    });

    it("handles disabled state on MenuItem", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuItem disabled>
              Disabled Item
            </DropdownMenuPrimitive.DropdownMenuItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const item = screen.getByText("Disabled Item");
      expect(item).toHaveAttribute("data-disabled");
    });

    it("handles checked state on CheckboxItem", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuCheckboxItem checked>
              Checked Item
            </DropdownMenuPrimitive.DropdownMenuCheckboxItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const indicator = screen.getByTestId("check-icon");
      expect(indicator).toBeInTheDocument();
    });

    it("handles both inset and disabled states on MenuItem", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuItem inset disabled>
              Inset Disabled Item
            </DropdownMenuPrimitive.DropdownMenuItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const item = screen.getByText("Inset Disabled Item");
      expect(item).toHaveClass("pl-8");
      expect(item).toHaveAttribute("data-disabled");
    });

    it("handles unchecked state on CheckboxItem", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuCheckboxItem checked={false}>
              Unchecked Item
            </DropdownMenuPrimitive.DropdownMenuCheckboxItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument();
    });

    it("handles disabled state on CheckboxItem", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuCheckboxItem disabled>
              Disabled Checkbox
            </DropdownMenuPrimitive.DropdownMenuCheckboxItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const item = screen.getByText("Disabled Checkbox");
      expect(item).toHaveAttribute("data-disabled");
    });

    it("handles undefined className on MenuItem", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuItem>
              No Class Item
            </DropdownMenuPrimitive.DropdownMenuItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const item = screen.getByText("No Class Item");
      expect(item).toBeInTheDocument();
    });

    it("handles empty children in MenuItem", () => {
      render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuItem />
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const item = screen.getByRole("menuitem");
      expect(item).toBeInTheDocument();
    });

    it("handles inset prop correctly", () => {
      const { rerender } = render(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuItem inset={false}>
              Non-Inset Item
            </DropdownMenuPrimitive.DropdownMenuItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const nonInsetItem = screen.getByText("Non-Inset Item");
      expect(nonInsetItem).not.toHaveClass("pl-8");

      rerender(
        <DropdownMenuPrimitive.DropdownMenu defaultOpen>
          <DropdownMenuPrimitive.DropdownMenuContent>
            <DropdownMenuPrimitive.DropdownMenuItem inset={true}>
              Inset Item
            </DropdownMenuPrimitive.DropdownMenuItem>
          </DropdownMenuPrimitive.DropdownMenuContent>
        </DropdownMenuPrimitive.DropdownMenu>,
      );

      const insetItem = screen.getByText("Inset Item");
      expect(insetItem).toHaveClass("pl-8");
    });
  });
});
