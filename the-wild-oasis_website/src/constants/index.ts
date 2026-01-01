import { HiCalendarDays, HiHome, HiUser } from "react-icons/hi2";

export const navigationItems = [
  {
    href: "/cabins",
    label: "Cabins",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/account",
    label: "Guest area",
  },
] as const;

export const transition = {
  duration: 0.5,
  type: "tween",
  ease: [0.76, 0, 0.24, 1],
} as const;

export const asideLinks = [
  {
    name: "Home",
    href: "/account",
    icon: HiHome,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: HiCalendarDays,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: HiUser,
  },
];
