"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function LuxuryCTA() {
  return (
    <motion.div whileHover="hover" whileTap="tap" initial="rest" animate="rest">
      <motion.div
        variants={{
          rest: {
            y: 0,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
          },
          hover: {
            y: -2,
            boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
          },
          tap: {
            y: 1,
            scale: 0.98,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        className="inline-block rounded-2xl"
      >
        <Link
          href="/cabins"
          className="group relative inline-flex items-center gap-3 rounded-2xl bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 overflow-hidden"
        >
          {/* Glow layer */}
          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)]" />

          {/* Text */}
          <span className="relative z-10">Explore luxury cabins</span>

          {/* Arrow */}
          <motion.span
            className="relative z-10"
            variants={{
              rest: { x: 0, opacity: 0.8 },
              hover: { x: 6, opacity: 1 },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <ArrowRight size={20} />
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
