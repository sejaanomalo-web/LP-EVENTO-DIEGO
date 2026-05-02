"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, trackLead } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  caption?: string;
  size?: "md" | "lg";
  className?: string;
};

export function TicketCTA({
  label = "Falar com a equipe",
  caption,
  size = "md",
  className,
}: Props) {
  const href = getWhatsAppLink();
  const sizes = {
    md: "h-14 text-sm tracking-[0.18em] px-6",
    lg: "h-16 text-base tracking-[0.18em] px-8",
  } as const;

  return (
    <div className={cn("inline-flex flex-col items-start gap-2", className)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLead()}
        aria-label="Falar com a equipe no WhatsApp"
        className={cn(
          "ticket-clip group relative inline-flex items-center justify-between gap-6 bg-signal font-bold uppercase text-white transition-all duration-200 hover:bg-signal-hover hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
          sizes[size],
        )}
      >
        <span className="inline-flex items-center gap-3">
          <MessageCircle className="h-5 w-5" aria-hidden />
          <span>{label}</span>
        </span>
        <span className="hidden md:inline-flex h-6 items-center gap-[2px] opacity-80" aria-hidden>
          <span className="block h-full w-[2px] bg-white/80" />
          <span className="block h-full w-[1px] bg-white/60" />
          <span className="block h-full w-[3px] bg-white/80" />
          <span className="block h-full w-[1px] bg-white/60" />
          <span className="block h-full w-[2px] bg-white/80" />
          <span className="block h-full w-[1px] bg-white/60" />
          <span className="block h-full w-[3px] bg-white/80" />
        </span>
      </a>
      {caption ? (
        <span className="label-caps text-white/60 pl-1">{caption}</span>
      ) : null}
    </div>
  );
}
