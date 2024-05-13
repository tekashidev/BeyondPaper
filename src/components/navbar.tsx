"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator";
import { ThemeModeToggle } from "@/components/darkmode"


export function Navbar() {
  return (
    <div className="w-full flex flex-row place-content-end p-5">
        <NavigationMenu>
          <h1 className="text-left"><span className="tracking-widest font-bold">Beyond</span> Paper</h1>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical"/>
            <NavigationMenuItem>
              <Link href="/books" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Books
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical"/>
            <NavigationMenuItem>
              <Link href="/friends" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Friends
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical"/>
            <NavigationMenuItem>
              <Link href="/profile" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Profile
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical"/>
            <NavigationMenuItem>
                <ThemeModeToggle></ThemeModeToggle>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}
