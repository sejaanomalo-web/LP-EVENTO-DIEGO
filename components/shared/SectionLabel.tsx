import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  tone?: "sand" | "signal" | "white";
  className?: string;
  as?: "span" | "p";
};

export function SectionLabel({
  children,
  tone = "sand",
  className,
  as: Tag = "span",
}: Props) {
  const tones: Record<NonNullable<Props["tone"]>, string> = {
    sand: "text-sand",
    signal: "text-signal",
    white: "text-white",
  };
  return (
    <Tag
      className={cn(
        "label-caps inline-flex items-center gap-2",
        tones[tone],
        className,
      )}
    >
      <span aria-hidden className="text-signal">✱</span>
      <span>{children}</span>
    </Tag>
  );
}
