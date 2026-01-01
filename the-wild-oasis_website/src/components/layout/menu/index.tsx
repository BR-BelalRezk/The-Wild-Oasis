"use client";

import Link from "next/link";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { transition } from "@/constants";
import { cn } from "@/utils";

type MenuContextType = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  isDesktop: boolean;
};

const MenuContext = createContext<MenuContextType | null>(null);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

const DESKTOP_QUERY = "(min-width: 1024px)";

const Menu = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const [toggle, setToggle] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);

    const sync = () => {
      setIsDesktop(media.matches);
      setToggle(media.matches);
    };

    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <MenuContext.Provider value={{ toggle, setToggle, isDesktop }}>
      <nav {...props}>{children}</nav>
    </MenuContext.Provider>
  );
};

const MenuList = ({
  children,
  className,
}: React.HTMLAttributes<HTMLUListElement> & {}) => {
  const { toggle, isDesktop } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          className={className}
          variants={{
            open: {
              borderRadius: isDesktop ? 0 : 25,
              width: isDesktop ? "auto" : 200,
              height: isDesktop ? "auto" : 250,
              transition: {
                ...transition,
                delayChildren: 0.75,
                staggerChildren: 0.05,
              },
            },
            close: {
              borderRadius: 25,
              width: 44,
              height: 44,
              transition: { ...transition, delay: 0.2 },
            },
          }}
          initial="close"
          animate="open"
          exit="close"
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MenuListItem = ({
  children,
  href,
  className,
}: React.HTMLAttributes<HTMLLIElement> & {
  href: string;
}) => {
  const pathname = usePathname();
  return (
    <motion.li
      className={cn(className, "w-full text-nowrap")}
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 250, damping: 25 },
        },
        close: {
          opacity: 0,
          y: 25,
          transition: { duration: 0.5 },
        },
      }}
    >
      <Link
        href={href}
        className="relative z-20 flex w-full items-center justify-between py-1 px-3"
      >
        {children}
        {pathname === href && (
          <motion.span
            layoutId={"menu"}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            className="size-3 bg-accent-950 rounded-full lg:size-auto lg:inset-0 lg:absolute lg:-z-10 lg:bg-accent-800"
          />
        )}
      </Link>
    </motion.li>
  );
};

const MenuTrigger = ({
  children,
  className,
}: React.HTMLAttributes<HTMLButtonElement> & {
  children: React.JSX.Element;
}) => {
  const { toggle, setToggle } = useMenu();
  return (
    <button onClick={() => setToggle(!toggle)} className={className}>
      {cloneElement(children, { toggle })}
    </button>
  );
};

export { Menu, MenuList, MenuListItem, MenuTrigger };
