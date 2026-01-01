import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

export default function useTextSplitedAnimation(
  duration: number,
  staggered: number
) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    new SplitType(scope.current, { types: "lines,words", tagName: "span" });
  }, [scope]);
  const enterAnimation = () =>
    animate(
      scope.current.querySelectorAll(".word"),
      { transform: "translateY(0)" },
      { duration, delay: stagger(staggered) }
    );
  const exitAnimation = () =>
    animate(
      scope.current.querySelectorAll(".word"),
      { transform: "translateY(100%)" },
      {
        duration: 0.3,
        delay: stagger(-0.025, {
          startDelay: scope.current.querySelectorAll(".word").length * 0.025,
        }),
      }
    );

  return { scope, enterAnimation, exitAnimation };
}
