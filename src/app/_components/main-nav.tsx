"use client";

import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Flame } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "~/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function MainNav() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="sticky top-0 z-50 flex w-full justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <NavigationMenu>
        <NavigationMenuList className="container flex h-14 items-center">
          <NavigationMenuItem className="mr-4 flex items-center">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={cn("flex items-center space-x-2")}>
                <Flame className="h-6 w-6 text-red-500" />
                <span className="font-bold">Phoenix Flames</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Add new navigation items */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn("px-4 py-2 hover:text-accent-foreground/80")}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn("px-4 py-2 hover:text-accent-foreground/80")}
              >
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList className="container flex h-14 items-center">
          {/* Right-aligned items */}
          <div className="flex items-center space-x-4">
            {!isSignedIn && (
              <>
                <SignUpButton>
                  <Button>Create Account</Button>
                </SignUpButton>
                <SignInButton>
                  <Button variant="ghost">Sign In</Button>
                </SignInButton>
              </>
            )}

            {isSignedIn && (
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 w-8 rounded-full">
                  <Avatar>
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>
                      {user?.firstName?.charAt(0) ??
                        user?.username?.charAt(0) ??
                        "U"}
                    </AvatarFallback>
                  </Avatar>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li className="row-span-3">
                      <Link
                        href="/profile"
                        className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent"
                      >
                        <UserButton />
                        <span>Profile</span>
                      </Link>
                    </li>
                    {/* Add more menu items as needed */}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
