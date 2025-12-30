import { navigationItems } from "@/constants";
import { Menu, MenuList, MenuListItem, MenuTrigger } from "../../menu";
import HamburgerIcon from "./hamburger-icon";

export default function Navigation() {
  return (
    <Menu className="relative">
      <MenuTrigger className="flex flex-col items-center justify-center gap-1 bg-accent-500 size-11 rounded-full relative z-20 lg:hidden">
        <HamburgerIcon />
      </MenuTrigger>
      <MenuList className="text-xl  gap-16 items-center absolute top-0 right-0 bg-accent-500 z-10 flex flex-col lg:relative lg:top-auto lg:right-auto lg:flex-row lg:bg-transparent">
        {navigationItems.map((item) => (
          <MenuListItem
            key={item.label}
            href={item.href}
            className="hover:text-accent-900 lg:hover:text-accent-400 transition-colors"
          >
            {item.label}
          </MenuListItem>
        ))}
      </MenuList>
    </Menu>
  );
}
