import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

export default function useTextFadeInAnimation() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    new SplitType(scope.current, { types: "chars,lines", tagName: "span" });
  }, [scope]);
  const enterAnimation = () =>
    animate(
      scope.current.querySelectorAll(".char"),
      { opacity: 1 },
      { duration: 0.5, delay: stagger(0.2) }
    );
  const exitAnimation = () =>
    animate(
      scope.current.querySelectorAll(".char"),
      { opacity: 0 },
      {
        duration: 0.3,
        delay: stagger(-0.025, {
          startDelay: scope.current.querySelectorAll(".char").length * 0.025,
        }),
      }
    );
  return { scope, enterAnimation, exitAnimation };
}
