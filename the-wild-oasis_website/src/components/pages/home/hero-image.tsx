"use client";

import { motion } from "motion/react";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function HeroImage() {
  return (
    <figure className="fixed inset-0 size-full overflow-hidden">
      <motion.div
        initial={{ filter: "blur(12px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="size-full"
      >
        <Image
          src={bg}
          alt="Luxury cabins"
          placeholder="blur"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </figure>
  );
}
