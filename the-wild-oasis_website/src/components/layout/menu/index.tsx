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

type MenuContextType = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
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

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);

    const syncToggleWithViewport = () => {
      setToggle(media.matches);
    };

    syncToggleWithViewport();

    media.addEventListener("change", syncToggleWithViewport);

    return () => {
      media.removeEventListener("change", syncToggleWithViewport);
    };
  }, []);

  return (
    <MenuContext.Provider value={{ toggle, setToggle }}>
      <nav {...props}>{children}</nav>
    </MenuContext.Provider>
  );
};

const MenuList = ({
  children,
  className,
}: React.HTMLAttributes<HTMLUListElement> & {}) => {
  const { toggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          className={className}
          variants={{
            open: {
              borderRadius: 25,
              width: 250,
              height: 350,
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
              transition: { ...transition, delay: 1 },
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
      className={className}
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
      <Link href={href} className="relative">
        {children}
        {pathname === href.replace("/", "") && (
          <motion.span
            layoutId={"menu"}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            className=""
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
