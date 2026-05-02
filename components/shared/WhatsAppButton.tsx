"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/Button";
import { getWhatsAppLink, trackLead } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Props = Omit<ButtonProps, "asChild" | "onClick"> & {
  message?: string;
  showIcon?: boolean;
  ticketShape?: boolean;
  ariaLabel?: string;
  children?: React.ReactNode;
};

export function WhatsAppButton({
  variant = "primary",
  size = "md",
  message,
  showIcon = true,
  ticketShape = false,
  ariaLabel,
  className,
  children,
  ...rest
}: Props) {
  const href = getWhatsAppLink(message);
  const handleClick = () => trackLead();
  const label = children ?? "Falar com a equipe";

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(ticketShape && "ticket-clip", className)}
      {...rest}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label={ariaLabel ?? "Falar com a equipe no WhatsApp"}
      >
        {showIcon ? <MessageCircle className="h-4 w-4" aria-hidden /> : null}
        <span>{label}</span>
      </a>
    </Button>
  );
}
