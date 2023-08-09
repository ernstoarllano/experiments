'use client'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

export default function Nav() {
  return (
    <NavigationMenu className="pl-8 pt-8">
      <NavigationMenuList className="space-x-8">
        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products">
            <NavigationMenuLink>Products</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
