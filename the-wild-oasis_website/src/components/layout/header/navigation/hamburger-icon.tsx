"use client";
import { transition } from "@/constants";
import { motion } from "motion/react";

export default function Hamburger({ toggle }: { toggle?: boolean }) {
  return (
    <>
      <motion.span
        animate={
          toggle
            ? { translateY: 3.5, rotate: 45, transition }
            : {
                translateY: 0,
                rotate: 0,
                transition: { ...transition },
              }
        }
        className="rounded-full h-0.5 w-6 bg-accent-50"
      />
      <motion.span
        animate={
          toggle
            ? { translateY: -3.5, rotate: -45, transition }
            : {
                translateY: 0,
                rotate: 0,
                transition: { ...transition },
              }
        }
        className="rounded-full h-0.5 w-6 bg-accent-50"
      />
    </>
  );
}
