"use client";

import { useEffect } from "react";
import { useInView } from "motion/react";

import useTextSplitedAnimation from "@/hooks/use-text-split-animation";
import useTextFadeInAnimation from "@/hooks/use-text-fadeIn-animation";

type Props = {
  text: string;
  className?: string;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  animationType: "fadeIn" | "splitText";
};

export default function Heading({ text, className, as, animationType }: Props) {
  const split = useTextSplitedAnimation(0.5, 0.2);
  const fade = useTextFadeInAnimation();

  const scope = animationType === "splitText" ? split.scope : fade.scope;

  const enterAnimation =
    animationType === "splitText" ? split.enterAnimation : fade.enterAnimation;

  const isInView = useInView(scope, {
    once: true,
    amount: 0.3,
  });

  const Tag = as;

  useEffect(() => {
    if (isInView) {
      enterAnimation();
    }
  }, [isInView, enterAnimation]);

  return (
    <Tag ref={scope} className={className}>
      {text}
    </Tag>
  );
}
