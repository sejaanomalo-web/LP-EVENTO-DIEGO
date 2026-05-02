import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  opacity?: number;
};

export function DiamondBackground({ className, opacity = 0.06 }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-diamond-pattern bg-diamond",
        className,
      )}
      style={{ opacity }}
    />
  );
}
