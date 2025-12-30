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
