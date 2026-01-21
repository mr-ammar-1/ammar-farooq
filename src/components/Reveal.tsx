import { PropsWithChildren, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = {
  className?: string;
  delay?: number;
  durationMs?: number;
  direction?: Direction;
};

const Reveal = ({ className, delay = 0, durationMs = 700, direction = "up", children }: PropsWithChildren<RevealProps>) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const base = "transition-transform transition-opacity will-change-transform will-change-opacity";
  const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";
  const dir =
    direction === "up"
      ? "reveal-up"
      : direction === "down"
      ? "reveal-down"
      : direction === "left"
      ? "reveal-left"
      : "reveal-right";

  const style: CSSProperties = {
    transitionDuration: `${durationMs}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={cn(base, ease, dir, inView && "in-view", className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default Reveal;
